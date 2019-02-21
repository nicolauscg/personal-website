$(document).ready(function() {
  // navbar
	$('.hamburger-icon').click(function() {
    $('.navbar').toggleClass('open');
  });
  
  // move text based on cursor position
  var elementToBeMoved = $('.hero__large-text');
  if (elementToBeMoved.length) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var factor = 100;
    $(window).mousemove(function(event) {
      elementToBeMoved.css('top', (windowHeight/2 - event.pageY)/factor );
      elementToBeMoved.css('left', (windowWidth/2 - event.pageX)/factor );
    });
  }

  var numberElements = $('.scramble-number');

  function intervalFunction() {
    return Math.floor((Math.random() * 80) + 1);
  }

  function scrambleNumber(element) {
    var initial = element.innerHTML.split('');

    for(var i=0; i<initial.length; i++) {
      scramble(element, i, initial[i], 15, intervalFunction);
    }
  }
  function scramble(element, digit, initial, count, interval) {
    var newNumber = element.innerHTML.split('');
    if (count <= 0) {
      newNumber[digit] = initial;
      element.innerHTML = newNumber.join('');
      return;
    }
    newNumber[digit] = Math.floor((Math.random() * 9) + 1);
    element.innerHTML = newNumber.join('');
    setTimeout(scramble, interval(), element, digit, initial, count - 1, interval)
  }
  numberElements.each(function() {
    scrambleNumber(this)
  });

  // typewriter effect
  var elementSelector = $('.typewriter');
  if (elementSelector.length) {
    var linesOfText = elementSelector.html().split("<br>");
    var totalCharCount = linesOfText.join('').length;
    var initialHeight = elementSelector.css('height');
    elementSelector.html('');
    elementSelector.css('height', initialHeight);
    var i = 0;
    var charIndex = 0;
    var lineIndex = 0;
    var speed = 50;
    function typeWriter() {
      if (i < totalCharCount){
        if (charIndex == linesOfText[lineIndex].length) {
          charIndex = 0;
          lineIndex++;
          elementSelector.html(elementSelector.html() + '<br>');
        }
        elementSelector.html(elementSelector.html() + linesOfText[lineIndex].charAt(charIndex));
        i++;
        charIndex++;
        setTimeout(typeWriter, speed);
      } else {
        elementSelector.css('height', 'fit-content');
      }
    }
    typeWriter();
  }
});
