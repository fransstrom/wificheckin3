
$(document).ready(function(){

$('.slide-section').click(function(e){



// Get navHeight
var navHeight= $('nav').outerHeight();

var linkHref= $(this).attr('href');

console.log(navHeight);

console.log($(linkHref).offset().top);



$('html, body').animate({
  scrollTop:$(linkHref).offset().top-navHeight-35
},1000);


    e.preventDefault();
});


});
