import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import './api-call.js';
import { tamagotchi } from './tamagotchi.js';


$(document).ready(function(){


  let tama = tamagotchi;
  tama.setHunger();
  tama.setClean();
  tama.setAffection();
  tama.setSleep();
  $('#play').click(function(){
    const updateCounter = setInterval(() => {
      $('#hunger').text(tama.foodLevel);
      $('#sleep').text(tama.sleepLevel);
      $('#clean').text(tama.cleanLevel);
      $('#love').text(tama.affectionLevel);

      if(tama.foodLevel < 3 && tama.foodLevel > 0){
        $('#text2').text('Feed your tamagotchi before she gets hangry!');
      } else if(tama.foodLevel > 3){
        $('#text2').text("Good job, keep her happy");
      }

      if(tama.cleanLevel < 3 && tama.cleanLevel > 0){
        $('#text3').text('Clean your tamagotchis room before she cannot play anymore!');
      } else if(tama.cleanLevel > 3){
        $('#text3').empty();
      }

      if(tama.affectionLevel < 3 && tama.affectionLevel > 0){
        $('#text4').text('Show love to your tamagotchi before she is too sad to play!');
      } else if(tama.affectionLevel > 3){
        $('#text4').empty();
      }

      if(tama.sleepLevel < 3 && tama.sleepLevel > 0) {
        $('#text5').text('Send your tamagotchi to bed before she grumpy!');
      } else if(tama.sleepLevel > 3){
        $('#text5').empty();
      }

      if(tama.areYouDead()){
        $('#text').text('GAME OVER');
      }
      if(tama.tooMessy()){
        $('#text').text('GAME OVER');
      }
      if(tama.noLove()){
        $('#text').text('GAME OVER');
      }
      if(tama.tooTired()){
        $('#text').text('GAME OVER');
      }
    }, 1000);

  })



  $(document).keydown(function(e){
    if(e.keyCode === 32) {
      //medium feed, spacebar
      tama.eatMedium();
      $('#hunger').text(tama.foodLevel);
    } else if(e.keyCode === 65) {
      //small feed, a
      tama.eatSmall();
      $('#hunger').text(tama.foodLevel);
    } else if(e.keyCode === 83) {
      //large feed, s
      tama.eatLarge();
      $('#hunger').text(tama.foodLevel);
    } else if(e.keyCode === 68) {
      //gross feed, d
      tama.eatGross();
      $('#hunger').text(tama.foodLevel);
    } else if(e.keyCode === 90) {
      //clean, z
      tama.clean();
      $('#clean').text(tama.cleanLevel);
    } else if(e.keyCode === 88) {
      //love, x
      tama.love();
      $('#love').text(tama.affectionLevel);
    } else if(e.keyCode === 67) {
      tama.nap();
      $('#sleep').text(tama.sleepLevel);
      //nap, c
    } else if(e.keyCode === 86) {
      tama.longNap();
      $('#sleep').text(tama.sleepLevel);
      //long nap, v
    }
  });
});
