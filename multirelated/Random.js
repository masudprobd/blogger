//<![CDATA[
function rp_results_label(r) {
    for (var e = 0; e < r.feed.entry.length; e++) {
        var l = r.feed.entry[e];
        rpTitles[rpTitlesNumb] = l.title.$t;
        for (var t = 0; t < l.link.length; t++)
            if ("alternate" == l.link[t].rel) {
                rpUrls[rpTitlesNumb] = l.link[t].href, rpTitlesNumb++;
                break
            }
    }
}

function removeRandomDuplicate() {
    for (var r = new Array(0), e = new Array(0), l = 0; l < rpUrls.length; l++) contains(r, rpUrls[l]) || (r.length += 1, r[r.length - 1] = rpUrls[l], e.length += 1, e[e.length - 1] = rpTitles[l]);
    rpTitles = e, rpUrls = r
}

function contains(r, e) {
    for (var l = 0; l < r.length; l++)
        if (r[l] == e) return !0;
    return !1
}

function showRandomLabels() {
    for (e = 0; e < rpUrls.length; e++) rpUrls[e] == currentposturl && (rpUrls.splice(e, 1), rpTitles.splice(e, 1));
    var r = Math.floor((rpTitles.length - 1) * Math.random()),
        e = 0;
    for (rpTitles.length > 1 && document.write("<ul>"); e < rpTitles.length && e < 20 && e < maxresults;) document.write('<a href="' + rpUrls[r] + '"><li> <i class="fas fa-angle-double-right"></i> ' + rpTitles[r] + "</li></a>"), r < rpTitles.length - 1 ? r++ : r = 0, e++;
    document.write("</ul>")
}
var rpTitles = new Array,
    rpTitlesNumb = 0,
    rpUrls = new Array;
//]]>