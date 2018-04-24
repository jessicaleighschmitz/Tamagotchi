import $ from 'jquery';
import './main.js';

$(document).ready(function(){
  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=tamagotchi&limit=1&offset=0&rating=G&lang=en`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $('#tamagotchi').html(`<img src="${response.data[0].images.fixed_height.url}">`);

    },
    error: function() {
      $('#tamagotchi').text("There was an error processing your request. Please try again.")
    }
  });
    $.ajax({
      url: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=hungry&limit=1&offset=0&rating=G&lang=en`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {

        let hungry= $('#gifHunger').html(`<img src="${response.data[0].images.fixed_width.url}">`);

      },
      error: function() {
        $('#tamagotchi').text("There was an error processing your request. Please try again.")
      }
    });

    $.ajax({
      url: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=sleepy cat&limit=2&offset=0&rating=G&lang=en`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {

        let sleepy = $('#gifSleepy').html(`<img src="${response.data[0].images.original.url}">`);

      },
      error: function() {
        $('#tamagotchi').text("There was an error processing your request. Please try again.")
      }
    });
    $.ajax({
      url: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=tamagotchi poop&limit=2&offset=0&rating=G&lang=en`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(response);
        let clean= $('#gifClean').html(`<img src="${response.data[0].images.original.url}">`);

      },
      error: function() {
        $('#tamagotchi').text("There was an error processing your request. Please try again.")
      }
    });
    $.ajax({
      url: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=cuddle&limit=2&offset=0&rating=G&lang=en`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(response);
        let affection = $('#gifAffection').html(`<img src="${response.data[0].images.fixed_height.url}">`);

      },
      error: function() {
        $('#tamagotchi').text("There was an error processing your request. Please try again.")
      }
    });
});
