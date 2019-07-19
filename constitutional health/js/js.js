$(window).scroll(function(event) {
  if($(this).scrollTop() > 105) {
   $(".scroll-mnu").hide();
   return false;
   }
  else {
   $(".scroll-mnu").show();
   }
  }); 
