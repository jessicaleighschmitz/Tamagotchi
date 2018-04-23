import { tamagotchi } from './../src/tamagotchi.js';

describe('tamagotchi', function(){
  let tama = tamagotchi;
  beforeEach(function() {
    jasmine.clock().install();
    tama.foodLevel = 10;
    tama.name = "Ben";
    tama.setHunger();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function(){
    expect(tama.name).toEqual("Ben");
    expect(tama.foodLevel).toEqual(10);
  });
  it('should die if the food level is 0', function(){
    tama.foodLevel = 0;
    expect(tama.areYouDead()).toBe(true);
  });
  it('should have a food level of 9 after 2001 milliseconds', function(){
    jasmine.clock().tick(2001);
    expect(tama.foodLevel).toEqual(9);
  });
  it('should die if 20 seconds pass without feeding', function(){
    jasmine.clock().tick(20001);
    expect(tama.areYouDead()).toBe(true);
  });
  it('should have an increased food level if Tama eats cherries', function(){
    expect(tama.eatSmall("cherries")).toEqual("Your tamagotchi ate cherries, her food level goes up 5!")
    expect(tama.foodLevel).toEqual(15);
  });
});
