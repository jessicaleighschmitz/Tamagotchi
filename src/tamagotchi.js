export let tamagotchi = {
  foodLevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel --;
      if(this.areYouDead() == true) {
        clearInterval(hungerInterval);
        return "Oh no, your tamagotchi died!"
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
      return `Your tamagotchi ate ${food}, her food level changes by ${amount}!`
    }
  },
  cleanLevel: 10,
  setClean: function() {
    const cleanInterval = setInterval(() => {
      this.cleanLevel --;
      if(this.tooMessy() == true) {
        clearInterval(cleanInterval);
        return "Oh no, your tamagotchi is too messy to play!"
      }
    }, 5000);
  },
  tooMessy: function() {
    if(this.cleanLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  clean: function() {
    this.cleanLevel = 10;
  },
  affectionLevel: 10,
  setAffection: function() {
    const affectionInterval = setInterval(() => {
    this.affectionLevel --;
    if(this.noLove()== true) {
      clearInterval(affectionInterval);
      return "Oh no, your tamagotchi is too sad to play!"
    }
  }, 5000);
},
  noLove: function() {
    if(this.affectionLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
};
tamagotchi.eatSmall = tamagotchi.feed(5);
tamagotchi.eatMedium = tamagotchi.feed(10);
tamagotchi.eatLarge = tamagotchi.feed(15);
tamagotchi.eatGross = tamagotchi.feed(-5);
