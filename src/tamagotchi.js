export let tamagotchi = {
  foodLevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel --;
      if(this.areYouDead() == true) {
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
      that.foodLevel += amount;
      return `Your tamagotchi ate ${food}, her food level changes by ${amount}!`;
    }
  },
  cleanLevel: 10,
  setClean: function() {
    const cleanInterval = setInterval(() => {
      this.cleanLevel --;
      if(this.tooMessy() == true) {
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
  },
  love: function() {
    this.affectionLevel = 10;
  },
  sleepLevel: 10,
  setSleep: function() {
    const sleepInterval = setInterval(() => {
      this.sleepLevel--;
      if(this.tooTired() == true) {
        return "Oh no, your tamagotchi is too tired to play!"
      }
    }, 10000);
  },
  tooTired: function() {
    if(this.sleepLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  sleep: function(amount) {
    let that = this;
    return function(type){
      that.sleepLevel += amount;
      return `Your tamagotchi ${type}, her sleep level changes by ${amount}!`;
    }

  }
};
tamagotchi.eatSmall = tamagotchi.feed(5);
tamagotchi.eatMedium = tamagotchi.feed(10);
tamagotchi.eatLarge = tamagotchi.feed(15);
tamagotchi.eatGross = tamagotchi.feed(-5);
tamagotchi.nap = tamagotchi.sleep(2);
tamagotchi.longNap = tamagotchi.sleep(5);
