$(function () {

    // Tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Show tracking in header on scroll
    var element = $('.hero-section');
    var headerTracking = $('.header-tracking');

    if ( element.length && headerTracking.length ) {
        var position = element.offset().top + element.height();

        $(window).on('scroll' , function(){

            if ( $(window).scrollTop() > position ) {
                headerTracking.removeClass('d-none');
                $('header').addClass('small');
            } else {
                headerTracking.addClass('d-none');
                $('header').removeClass('small');
            }
    
        });

    }
    
    

    // Show input on mobile
    headerTracking.find('button').on('click' , function(){
        headerTracking.toggleClass('open');
    });

})