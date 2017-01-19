var Food = require('../food');
var Hero = require('../hero');
var Rat = require('../rat');
var assert = require('assert');

var food1 = new Food("Chips", 10);
var hero1 = new Hero("Lancelot", 80, "Herring");
var hero2 = new Hero("Shrek", 50, "SwampCrab");
var rat1 = new Rat();

describe('Food', function(){
  beforeEach(function(){
    hero1.health = 80;
    hero2.health = 50;
  });  

  it('Food should have a name', function(){
    assert.equal("Chips", food1.name);
  });

  it('Food should have replenishment level', function(){
    assert.equal(10, food1.replenishValue);
  });

  it('Hero should be able to eat and health increase by 10', function(){
    hero1.eat();
    assert.equal(90, hero1.health);
  });

  it('favourite food should increase Heroes health x 1.5', function(){
    hero1.favouriteFood();
    assert.equal(120, hero1.health);
  });

  it('should see if food is poisonous', function(){
    food1.poisonous;
    assert.equal(-10, food1.replenishValue);
  });

  it('poisoned food should decrease heroes health by 20', function(){
    // hero1.eat();
    hero1.poison();
    assert.equal(70, hero1.health);
  });

});  
