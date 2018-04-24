import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import './api-call.js';
import {hungry} from './api-call.js'
import { tamagotchi } from './tamagotchi.js';

function updateTama(tama){
  tama.foodLevel = 10;
  tama.sleepLevel = 10;
  tama.affectionLevel = 10;
  tama.cleanLevel = 10;
}

function updateCounter(tama) {
   setInterval(() => {
    $('#hunger').text(tama.foodLevel);
    $('#sleep').text(tama.sleepLevel);
    $('#clean').text(tama.cleanLevel);
    $('#love').text(tama.affectionLevel);

    if(tama.foodLevel < 3 && tama.foodLevel > 0){
      $('#text2').text('Feed your tamagotchi before she gets hangry!');
      $("#tamagotchi").hide();
      $('#gifHunger').show();

    } else if(tama.foodLevel > 3){
      $('#text2').text("Good job, keep her happy");
      $('#tamagotchi').show();
      $('#gifHunger').hide();
    }

    if(tama.cleanLevel < 3 && tama.cleanLevel > 0){
      $('#tamagotchi').hide();
      $('#gifClean').show();
      $('#text3').text('Clean your tamagotchis room before she cannot play anymore!');
    } else if(tama.cleanLevel > 3){
      $('#text3').empty();
      $('#tamagotchi').show();
      $('#gifClean').hide();
    }

    if(tama.affectionLevel < 3 && tama.affectionLevel > 0){
      $('#tamagotchi').hide();
      $('#gifAffection').show();
      $('#text4').text('Show love to your tamagotchi before she is too sad to play!');
    } else if(tama.affectionLevel > 3){
      $('#tamagotchi').show();
      $('#gifAffection').hide();
      $('#text4').empty();
    }

    if(tama.sleepLevel < 3 && tama.sleepLevel > 0) {
      $('#tamagotchi').hide();
      $('#gifSleepy').show();
      $('#text5').text('Send your tamagotchi to bed before she grumpy!');
    } else if(tama.sleepLevel > 3){
      $('#text5').empty();
      $('#gifSleepy').hide();
      $('#tamagotchi').show();
    }

    if(tama.areYouDead()|| tama.tooMessy() || tama.noLove() || tama.tooTired()) {
      $('#text').text('GAME OVER');
      $(".gifs").hide();
      $('#playAgain').show();
      $('#play').hide();
    }
  }, 1000)
}
$(document).ready(function(){
  let tama = tamagotchi;
  tama.setHunger();
  tama.setClean();
  tama.setAffection();
  tama.setSleep();
  $('#play').click(function(){
    updateCounter(tama);

    $('#playAgain').click(function(){
      updateTama(tama);
      updateCounter(tama);
      $('.gifs').show();
    });
  }),



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
