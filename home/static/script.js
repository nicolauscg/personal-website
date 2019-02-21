$(document).ready(function() {
  // navbar
	$('.hamburger-icon').click(function() {
    $('.navbar').toggleClass('open');
  });
  
  movingText($('.hero__large-text'));

  scrambleNumber($('.scramble-number'));

  typewriter($('.typewriter'));

  
  function movingText(selector, attributes) {
    selector.each(function(element) {
      var window =  $(window);
      var windowWidth = window.width();
      var windowHeight = window.height();
      var factor = attributes["factor"] ? attributes["factor"] : 100;
      // adjust top and left values depending on mouse position
      window.mousemove(function(event) {
        element.css('top', (windowHeight/2 - event.pageY)/factor );
        element.css('left', (windowWidth/2 - event.pageX)/factor );
      });
    });
  }

  function scrambleNumber(selector, attributes={}) {
    var intervalMin = attributes["intervalMin"] ? attributes["intervalMin"] : 20;
    var intervalMax = attributes["intervalMax"] ? attributes["intervalMax"] : 80;
    var intervalFunc = getIntervalFunction(intervalMin, intervalMax);
    var scrambleCount = attributes["count"] ? attributes["count"] : 15;
    // for every element in selector
    selector.each(function() {
      var element = this;
      var initialNumber = element.innerHTML.split('');
      // for every digit in element
      $.each(initialNumber, function(index, obj) {
        // scramble index-th digit scrambleCount times, 
        // then reapply original number in index-th digit
        scrambleDigit(scrambleCount);
        function scrambleDigit(count) {
          var temp = element.innerHTML.split('');
          if (count <= 0) {
            temp[index] = initialNumber[index];
            element.innerHTML = temp.join('');
            return;
          }
          temp[index] = Math.floor((Math.random() * 9) + 1);
          element.innerHTML = temp.join('');
          setTimeout(scrambleDigit, intervalFunc(), --count);
        }
      }); 
    });
    
    // returns a function that will be called to get randomized number between min max
    // used in setTimout to delay scrambling digits
    function getIntervalFunction(min, max) {
      return function() {
        return Math.floor((Math.random() * (max-min)) + min);
      }
    }
  }

  function typewriter(selector, attributes={}) {
    var speed = attributes["interval"] ? attributes["interval"] : 40;

    $.each(selector, function() {
      var element = this;
      var initialHeight = element.offsetHeight;
      var linesOfText = element.innerHTML.trim().split("<br>");
      var totalCharCount = linesOfText.join('').length;
      // empty content but make div height same as before
      element.innerHTML = '';
      element.style.height = initialHeight+"px";

      var i = 0;
      var charIndex = 0; // index of character in current line
      var lineIndex = 0; // index of line

      typeWriter();

      function typeWriter() {
        if (i < totalCharCount){
          // if end of line, add newline char
          if (charIndex == linesOfText[lineIndex].length) {
            charIndex = 0;
            lineIndex++;
            element.innerHTML += '<br>';
          } 
          element.innerHTML += linesOfText[lineIndex].charAt(charIndex);
          i++;
          charIndex++;
          
          setTimeout(typeWriter, interval);
        } else {
          element.style.height = 'fit-content';
        }
      }
    });

  }
});
