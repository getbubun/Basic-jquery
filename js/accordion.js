$(document).ready(() => {
  $("#header1").click(function(){
  $("#content1").slideToggle(300);
  $("#content2").hide();
  $("#content3").hide();
  $("#content4").hide();
  });


  $("#header2").click(function(){
  $("#content2").slideToggle(300);
  $("#content1").hide();
  $("#content3").hide();
  $("#content4").hide();
  });


  $("#header3").click(function(){
  $("#content3").slideToggle(300);
  $("#content1").hide();
  $("#content2").hide();
  $("#content4").hide();
  });

  $("#header4").click(function(){
  $("#content4").slideToggle(300);
  $("#content1").hide();
  $("#content2").hide();
  $("#content3").hide();
  });
})