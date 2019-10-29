class MakeColoryDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  step() {
    // call the old version of step at the beginning of any call to this new version of step
    // oldStep();
    super.step();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // var styleSettings = {
    //   top: top,
    //   left: left,
    //   // blinking: blinking
    // };
    // this.$node.css(styleSettings);
    this.$node.addClass('poop');

    var styleSettings = {
      // top: top,
      // left: left,
      'font-size': '5rem',
      'margin-top': 'calc(50vh - 8rem/2)',
      border: 'none',
    };

    this.$node.css(styleSettings);

    var imageUrl = './land.png';
    $('body').css('background-image', 'url(' + imageUrl + ')');

  }
  // blink() {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     blinking: blinking
  //   };
  //   this.$node.css(styleSettings);
  // }
}

window.MakeColoryDancer = MakeColoryDancer;