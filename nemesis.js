var Nemesis = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;

};

Nemesis.prototype = {
  talk: function(){
    return "I'm not a Teenage Mutant Ninja Turtle, I'm " + this.name;
  },

  eat: function(){
    this.health = this.health + 10;
    return "Eating makes me feel like doin' Evils"
  },

  favouriteFood: function(){
    this.health = this.health * 1.5;
    return "My Favourite food makes me feel like I can rip the arms off a Plumber" 
  },

  // magicPower: function(){
    
  // };
};




module.exports = Nemesis;