$(document).ready(function(){
    var owl = $('.image-con')
    owl.owlCarousel({
          loop: true,
        autoplay: true,
        dots: false ,
        autoplayHoverPause: true,
        margin:50
    })

    var dots = $('.dot')
    dots.click(function() {
      var dotIndex = $(this).data('index')
      dotIndex+=3
      owl.trigger('to.owl.carousel', [dotIndex])
    });

    owl.on('changed.owl.carousel', function(event) {
      var current = event.item.index - 3
      dots.removeClass('active')
      dots.filter('[data-index="' + current + '"]').addClass('active')
    })
  
  
  
  // for change image in projects
  $('.project-item').click(function(){
    var imgSrc = $(this).data('img')
    $('#project-img').fadeOut(300, function() {
      $(this).attr('src', `images/${imgSrc}`).fadeIn(300)
    })
    $('.project-item').removeClass('active')
    $(this).addClass('active')
  })
  
  
  
 $("#contactform").submit(function(e){
        e.preventDefault();
        var action = $(this).attr("action");
        $.ajax({
        type: "POST",
        url: action,
        crossDomain: true,
        data: new FormData(this),
        dataType: "json",
        processData: false,
        contentType: false,
        headers: {
        "Accept": "application/json"
        }
    }).done(function() {
        alert('Thanks for Contacting,We will get back to you sonn')
    }).fail(function() {
        alert('An error occurred! Please try again later.')
    });
    });
   
  
  })