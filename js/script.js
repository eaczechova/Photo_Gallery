let anchorElements = $('a');

$('.search__box').keyup(function() {
  $('a').hide();
  let inputTypes = $('.search__box').val().toLowerCase();
  if (inputTypes.length === 0) {
    $('a').show();
  } else {
    anchorElements.each(function(i, element) {
      let tempItem = element.dataset.title.toLowerCase();
      if(tempItem.indexOf(inputTypes) > -1) {
        $(element).show();
      }
    });
  }
});

// Lightbox plugin option, code snippet taken from plugin documentation: https://lokeshdhakar.com/projects/lightbox2/

lightbox.option({
      'alwaysShowNavOnTouchDevices': true,
      'resizeDuration': 200,
      'wrapAround': true,
      'maxWidth': 700,
      'fitImagesInViewport': true
    })
