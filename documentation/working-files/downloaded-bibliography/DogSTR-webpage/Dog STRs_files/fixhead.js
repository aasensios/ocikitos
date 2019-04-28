function resizeHeader() {
    $(".header-push").height($("header").height());
}
$(document).ready(resizeHeader);
$(window).resize(resizeHeader);
