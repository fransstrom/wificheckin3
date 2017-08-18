
$(document).ready(function(){

$('.slide-section').click(function(e){



// // Get navHeight
var navHeight= $('nav').outerHeight();

var linkHref= $(this).attr('href');

// console.log(navHeight);
//
// console.log($(linkHref).offset().top);

console.log(linkHref);

$('html, body').animate({
  scrollTop:$(linkHref).offset().top-navHeight-35
},1000);


    e.preventDefault();
});


});



function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-plus fa-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);
