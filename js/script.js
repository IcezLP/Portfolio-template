$(document).ready(function() {

    // Smooth scroll
    $('.nav-link').on('click', function() {
        var page = $(this).attr('href');
        var speed = 750;
        $('html, body').animate({
            scrollTop: $(page).offset().top
        },speed);
        return false;
    });

    // var waypoints = $('#contact').waypoint(function(direction) {
    //     console.log(this.element.id + ' hit')
    // });

    $('#carousel').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    })

});