/*start continue-reading */
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
      items:4,
      autoplay:true,
      nav:true,
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
        0:{
            items:1,

        },
        400:{
            items:2
        },
        900:{
            items:3,
        },
    }
   
});

});

/* end continue-reading */