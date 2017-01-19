var Hero = require('../hero');
var assert = require('assert');

var hero1 = new Hero("Lancelot", 80, "Herring");
var hero2 = new Hero("Shrek", 50, "SwampCrab");

describe('Hero', function(){
  beforeEach(function(){
    hero1.health = 80;
    hero2.health = 50;
  });

it('Hero should have a name', function(){
  assert.equal("Lancelot", hero1.name);
});

it('Hero should have health level', function(){
  assert.equal(80, hero1.health);
});

it('Hero should have a favourite food', function(){
  assert.equal("Herring", hero1.favFood);
});

it('Hero should be able to talk and say their name', function(){
  assert.equal("Greetings and salutations! My name is Lancelot", hero1.talk());
});

});