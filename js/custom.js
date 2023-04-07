$(document).ready(function(){

  $(document).ready(function(){
    $(".progress-bar-custom").fadeIn();
    setTimeout(function(){
      $(".progress-bar-custom").hide();
      $("#main-page").fadeIn();
    }, 3000);
  });

    $('.accordion-list > li > .accordion-content').hide();
      
    $('.accordion-list > li > .accordion-heading').click(function() {
      if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active")
        $(this).parent().find(".accordion-content").slideUp()
      } else {
        if( $(".accordion-list > li.active").hasClass("active")) {
            $(".accordion-list > li.active .accordion-content").slideUp();
            $(".accordion-list > li.active").removeClass("active");   
        }
        $(this).parent().addClass("active")
        $(this).parent().find(".accordion-content").slideDown()
      }
      return false;
    });    

    $('.accordion-list > li > .list-one').click(function() {
      if ($("#main-page").hasClass("active-one")) {
        $("#main-page").removeClass("active-one");
      } else {
        $("#main-page").removeClass("active-seven");
        $("#main-page").removeClass("active-six");
        $("#main-page").removeClass("active-five");
        $("#main-page").removeClass("active-four");
        $("#main-page").removeClass("active-three");
        $("#main-page").removeClass("active-two");
        $("#main-page").addClass("active-one");
      }
    }); 
    $('.accordion-list > li > .list-two').click(function() {
      if ($("#main-page").hasClass("active-two")) {
        $("#main-page").removeClass("active-two");
      } else {
        $("#main-page").removeClass("active-seven");
        $("#main-page").removeClass("active-six");
        $("#main-page").removeClass("active-five");
        $("#main-page").removeClass("active-four");
        $("#main-page").removeClass("active-three");
        $("#main-page").removeClass("active-one");
        $("#main-page").addClass("active-two");
      }
    });
    $('.accordion-list > li > .list-three').click(function() {
      if ($("#main-page").hasClass("active-three")) {
        $("#main-page").removeClass("active-three");
      } else {
        $("#main-page").removeClass("active-seven");
        $("#main-page").removeClass("active-six");
        $("#main-page").removeClass("active-five");
        $("#main-page").removeClass("active-four");
        $("#main-page").removeClass("active-two");
        $("#main-page").removeClass("active-one");
        $("#main-page").addClass("active-three");
      }
    });  
    $('.accordion-list > li > .list-four').click(function() {
      if ($("#main-page").hasClass("active-four")) {
        $("#main-page").removeClass("active-four");
      } else {
        $("#main-page").removeClass("active-seven");
        $("#main-page").removeClass("active-six");
        $("#main-page").removeClass("active-five");
        $("#main-page").removeClass("active-three");
        $("#main-page").removeClass("active-two");
        $("#main-page").removeClass("active-one");
        $("#main-page").addClass("active-four");
      }
    }); 
    $('.accordion-list > li > .list-five').click(function() {
      if ($("#main-page").hasClass("active-five")) {
        $("#main-page").removeClass("active-five");
      } else {
      $("#main-page").removeClass("active-seven");
      $("#main-page").removeClass("active-six");
      $("#main-page").removeClass("active-four");
      $("#main-page").removeClass("active-three");
      $("#main-page").removeClass("active-two");
      $("#main-page").removeClass("active-one");
      $("#main-page").addClass("active-five");
      }
    });
    $('.accordion-list > li > .list-six').click(function() {
      if ($("#main-page").hasClass("active-six")) {
        $("#main-page").removeClass("active-six");
      } else {
      $("#main-page").removeClass("active-seven");
      $("#main-page").removeClass("active-five");
      $("#main-page").removeClass("active-four");
      $("#main-page").removeClass("active-three");
      $("#main-page").removeClass("active-two");
      $("#main-page").removeClass("active-one");
      $("#main-page").addClass("active-six");
      }
    }); 
    $('.accordion-list > li > .list-seven').click(function() {
      if ($("#main-page").hasClass("active-seven")) {
        $("#main-page").removeClass("active-seven");
      } else {
      $("#main-page").removeClass("active-six");
      $("#main-page").removeClass("active-five");
      $("#main-page").removeClass("active-four");
      $("#main-page").removeClass("active-three");
      $("#main-page").removeClass("active-two");
      $("#main-page").removeClass("active-one");
      $("#main-page").addClass("active-seven");
      }
    });       
  });   