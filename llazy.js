jQuery.noConflict();
window.addEventListener("scroll", function() {
    jQuery('.llazy[data-loaded="false"').each(function() {
        var llazy = jQuery(this);
        if (llazy[0].getBoundingClientRect().top - window.innerHeight < 0) {
            jQuery(this).attr("data-loaded", "true");
            jQuery(this).attr("src", jQuery(this).attr("data-src"));
        }
    });
});
