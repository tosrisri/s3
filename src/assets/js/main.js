// Progress Bar Script
window.onscroll = function () {
    progressBar()
};

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("pBar").style.width = scrolled + "%";
}