function loadRelatedPosts() {
        var relatedPostsList = document.getElementById("related-posts-list");
        var currentPostLabel = "Dhaka Metro";  // এখানে বিদ্যমান লেবেল দিন
        var maxResults = 9;

        var script = document.createElement("script");
        script.src = "https://dhakametrobd.blogspot.com/feeds/posts/summary/-/" + currentPostLabel + "?alt=json-in-script&callback=displayRelatedPosts&max-results=" + maxResults;
        document.body.appendChild(script);
    }

    function displayRelatedPosts(json) {
        var entries = json.feed.entry;
        var relatedPostsList = document.getElementById("related-posts-list");

        if (entries && entries.length > 0) {
            relatedPostsList.innerHTML = "";  // পুরোনো লিস্ট রিসেট করে নতুন লিস্ট দেখানো হচ্ছে
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                var postTitle = entry.title.$t;
                var postUrl;

                for (var j = 0; j < entry.link.length; j++) {
                    if (entry.link[j].rel === "alternate") {
                        postUrl = entry.link[j].href;
                        break;
                    }
                }

                var listItem = document.createElement("li");
                var link = document.createElement("a");
                link.href = postUrl;
                link.textContent = postTitle;
                listItem.appendChild(link);
                relatedPostsList.appendChild(listItem);
            }
        } else {
            relatedPostsList.innerHTML = "<li> No related posts available.</li>";
        }
    }

    document.addEventListener("DOMContentLoaded", loadRelatedPosts);

