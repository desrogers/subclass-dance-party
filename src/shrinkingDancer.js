class MakeShrinkingDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  step() {
    // call the old version of step at the beginning of any call to this new version of step
    // super.step();

    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.addClass('shrink');

    var styleSettings = {
      border: '25px solid rgb(0, 0, 255)',
      'border-radius': '25px',
      position: 'absolute'
    };

    this.$node.css(styleSettings);
  }
}

window.MakeShrinkingDancer = MakeShrinkingDancer;