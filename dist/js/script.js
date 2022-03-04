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
    // isotope filter 
    var $grid= $(".grid").isotope({
        itemSelector:'.grid-item',
        layoutMode:'fitRows'
    })
    $(".button-group").on("click", "button",function(){
        var filterValue=$(this).attr('data-filter');
        $grid.isotope({filter:filterValue})
    })


    // new phones section 
      $("#new-phones .owl-carousel").owlCarousel({
        loop:true,
        nav: false,
        dots:true,
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

    // blogs carousel 
      $("#blogs .owl-carousel").owlCarousel({
        loop:true,
        nav: false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            900:{
                items:4
            },
        }
    })
})