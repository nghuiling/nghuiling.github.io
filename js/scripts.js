// credits: https://codepen.io/Ajeet_Kumar/pen/GRGYGLp

$(".filter a").click(function (e) {
    e.preventDefault();
    
    // Get the filter category from the href attribute
    var filterCategory = $(this).attr("href").substr(1);
    
    // Process each item in the gallery
    $(".sets a").each(function () {
        if (!$(this).hasClass(filterCategory) && filterCategory !== "") {
            // Hide items that don't match the filter
            $(this).addClass("hide");
        } else {
            // Show items that match the filter
            $(this).removeClass("hide");
        }
    });
    
    // Add active class to the clicked button
    $(".filter a").removeClass("btn-active");
    $(this).addClass("btn-active");
    
    // Force a small delay then trigger a window resize to help layout recalculation
    setTimeout(function() {
        $(window).trigger('resize');
    }, 50);
});

// Document ready function - executes when the page is fully loaded
$(document).ready(function() {
    // Fix for hamburger menu - close the menu when item is clicked
    $('.navbar-nav li a').on('click', function(){
        // Check if navbar is expanded (visible)
        if ($('#navbarNav').hasClass('show')) {
            // For Bootstrap 5, use this to close the menu
            var bsCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});


