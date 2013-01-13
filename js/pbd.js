
var pbd = function (options) {

  var init = function () {
    $(window).bind('keypress', function(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if(code == 13 || code == 32) { 
        that.next();
      }
    });
  }

  var slides = [];

  var slideIndex = 0;

  var that = {};

  that.next = function () {
    if(slideIndex >= slides.length) {
      return;
    }
    var slide = slides[slideIndex];
    console.log('loading slide', slide.element.attr('id'));
    if(slideIndex > 0) {
      slides[slideIndex - 1].element.fadeOut(1000, function() {
        slide.fn(slide.element);
      });
    } else {
      slide.fn(slide.element);
    }
    slideIndex++;
  };

  /**
  * setupFn will be called at the beginning of the chapter and should contain all animations etc
  */
  that.addChapter = function (setupFn, slideElement) {
    slideElement.hide();
    slides.push({
      fn: setupFn,
      element: slideElement
    });
  };

  init();

  return that;
}

