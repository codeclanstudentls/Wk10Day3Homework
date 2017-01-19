var Nemesis = require('../nemesis');
var assert = require('assert');

var nemesis = new Nemesis("Bowser", 20, "Mushrooms");


describe('Nemesis', function(){
  beforeEach(function(){
    nemesis.health = 20;
    // hero1.health = 50;
  });

it('Nemesis should have a name', function(){
  assert.equal("Bowser", nemesis.name);
});

it('Nemesis should have health level', function(){
  assert.equal(20, nemesis.health);
});

it('Nemesis should have a favourite food', function(){
  assert.equal("Mushrooms", nemesis.favFood);
});

it('Nemesis should be able to talk and say their name', function(){
  assert.equal("I'm not a Teenage Mutant Ninja Turtle, I'm Bowser", nemesis.talk());
});

});