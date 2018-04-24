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
      console.log(response);
      $('#tamagotchi').append(`<img src="${response.data[0].images.fixed_height.url}">`);

    },
    error: function() {
      $('#tamagotchi').text("There was an error processing your request. Please try again.")
    }
  });
});
