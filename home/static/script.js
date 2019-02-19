$(document).ready(function() {
	$('.hamburger-icon').click(function() {
    $('.navbar').toggleClass('open');
  });
  
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var factor = 50;
  
  $(window).mousemove(function(event) {
    $('.card__large-text').css('top', (windowHeight/2 - event.pageY)/factor );
    $('.card__large-text').css('left', (windowWidth/2 - event.pageX)/factor );
  });
});
