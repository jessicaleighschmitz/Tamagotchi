import { tamagotchi } from './../src/tamagotchi.js';

describe('tamagotchi', function(){
  let tama = tamagotchi;
  beforeEach(function() {
    jasmine.clock().install();
    tama.foodLevel = 10;
    tama.cleanLevel = 10;
    tama.affectionLevel = 10;
    tama.sleepLevel = 10;
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
    expect(tama.eatSmall("cherries")).toEqual("Your tamagotchi ate cherries, her food level changes by 5!");
    expect(tama.foodLevel).toEqual(15);
  });
  it('should have an increased food level if Tama eats pie', function(){
    expect(tama.eatMedium("pie")).toEqual("Your tamagotchi ate pie, her food level changes by 10!");
    expect(tama.foodLevel).toEqual(20);
  });
  it("should have an increased food level if your tamagotchi eats a mega-burrito!", function(){
    expect(tama.eatLarge("mega-burrito")).toEqual("Your tamagotchi ate mega-burrito, her food level changes by 15!");
    expect(tama.foodLevel).toEqual(25);
  });
  it("should have a decreased food level if your tamagotchi eats something gross", function(){
    expect(tama.eatGross("haggis")).toEqual("Your tamagotchi ate haggis, her food level changes by -5!");
    expect(tama.foodLevel).toEqual(5);
  });
  it('should have a clean level of 10 when created.', function(){
    expect(tama.cleanLevel).toEqual(10);
  });
  it('should have a room too messy to play when clean level is 0', function(){
    tama.cleanLevel = 0;
    expect(tama.tooMessy()).toBe(true);
  });
  it('should have a clean level of 10 when cleaned', function(){
    jasmine.clock().tick(5001);
    tama.clean();
    expect(tama.cleanLevel).toEqual(10);
  });
  it('should have a affection level of 10 when created', function(){
    expect(tama.affectionLevel).toEqual(10);
  });
  it('should cry if affection level is 0', function(){
    tama.affectionLevel = 0;
    expect(tama.noLove()).toBe(true);
  });
  it('should have a sleep level of 10 when created', function(){
    expect(tama.sleepLevel).toEqual(10);
  });
  it('should be too tired to play if sleep level is 0', function(){
    tama.sleepLevel = 0;
    expect(tama.tooTired()).toBe(true);
  });
  it('should have an increased sleep level if tamagotchi naps', function(){
    expect(tama.nap("napped")).toEqual("Your tamagotchi napped, her sleep level changes by 2!");
    expect(tama.sleepLevel).toEqual(12);
  });
  it('should have an increased sleep level if tamagotchi takes a long nap', function(){
    expect(tama.longNap("slept")).toEqual("Your tamagotchi slept, her sleep level changes by 5!");
    expect(tama.sleepLevel).toEqual(15);
  });
});
