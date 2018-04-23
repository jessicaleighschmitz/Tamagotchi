import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { tamagotchi } from './tamagotchi.js';


$(document).ready(function(){
  let tama = tamagotchi;


  $(document).keydown(function(e){
    if(e.keyCode === 32) {
      //medium feed, spacebar
      tama.eatMedium();
      console.log(tama.foodLevel);
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
