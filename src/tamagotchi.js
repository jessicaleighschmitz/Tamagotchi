export let tamagotchi = {
  foodLevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel --;
      if(this.areYouDead() == true) {
        clearInterval(hungerInterval);
        return "Oh no, you died!"
      }
    }, 2000);
  },
  areYouDead: function() {
    if(this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
      return function(food) {
      that.foodLevel += amount
      return `Your tamagotchi ate ${food}, her food level goes up ${amount}!`
    }
  }

};
  tamagotchi.eatSmall = tamagotchi.feed(5);
