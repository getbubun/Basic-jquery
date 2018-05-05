$(document).ready(() => {
    $(".toggle").click(function() {
       $('.navigation').slideToggle();
    });
    $(window).resize(function() {
       if ($(window).width() > 768) {
          $('.navigation').show();
       } else {
          $('.navigation').hide();
       }
    });
 });