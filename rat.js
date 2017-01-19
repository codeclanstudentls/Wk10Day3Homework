var Rat = function(){

};  


Rat.prototype = {
    poison: function(){
    if(food.poisonous){

      this.replenishValue = this.replenishValue - 20;
      return "Food is now poisoned";
    }
    else{
      this.replenishValue = this.replenishValue;
      return "Food is fine";
    }
  }  
};








module.exports = Rat;