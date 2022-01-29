$(document).ready(function(){
    // banner carousel 
    $("#banner-home .owl-carousel").owlCarousel({
        dots:true,
        items:1,
        loop:true,
        autoplay:true,
        // nav:true,
    })

    // top sale carousel 

    $("#top-sale .owl-carousel").owlCarousel({
        loop:true,
        nav: true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            },
           
            1500:{
                items:7
            }
        }
    })
})