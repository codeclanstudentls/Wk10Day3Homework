var Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;


};

Hero.prototype = {
  talk: function(){
    return "Greetings and salutations! My name is " + this.name;

  },

  eat: function(){
    this.health = this.health + 10;
    return "Eating makes me feel better"
  },

  favouriteFood: function(){
    this.health = this.health * 1.5;
    return "My Favourite food makes me feel like I can tackle a Rhino" 
  },

  magicPower: function(){
    this.favFood = favFood

  }

  // poisonedFood: function(){
  //   this.health = this.health - 10;
  //   return "Food is poisoned"
  // },


};



module.exports = Hero;