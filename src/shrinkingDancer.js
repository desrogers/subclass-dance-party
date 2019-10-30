class MakeShrinkingDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  step() {
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

    this.$node.addClass('tree');

    this.$node.mouseenter(() => {
      this.$node.fadeOut('slow');
    });

    this.$node.mouseleave(() => {
      this.$node.fadeIn('slow');
    });
  }
}

window.MakeShrinkingDancer = MakeShrinkingDancer;