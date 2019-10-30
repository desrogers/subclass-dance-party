class RotateDancers extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  step() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].addClass('rotate');
    }

    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  }
}

window.RotateDancers = RotateDancers;