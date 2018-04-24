import $ from 'jquery';
import './main.js';

$(document).ready(function(){
  let promise = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=tamagotchi&limit=1&offset=0&rating=G&lang=en`;
    request.onload = function() {
      if(this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response){
    let body = JSON.parse(response);
    $('#tamagotchi').html(`<img src="${body.data[0].images.fixed_height.url}">`);
  }, function(error) {
    $('#tamagotchi').text("There was an error processing your request. Please try again.");
  });

  let promise2 = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=hungry&limit=1&offset=0&rating=G&lang=en`;
    request.onload = function() {
      if(this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise2.then(function(response){
    let body = JSON.parse(response);
    $('#gifHunger').html(`<img src="${body.data[0].images.fixed_width.url}">`);
  }, function(error) {
    $('#gifHunger').text("There was an error processing your request. Please try again.");
  });

  let promise3 = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=sleepy cat&limit=2&offset=0&rating=G&lang=en`;
    request.onload = function() {
      if(this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise3.then(function(response){
    let body = JSON.parse(response);
    $('#gifSleepy').html(`<img src="${body.data[0].images.original.url}">`);
  }, function(error) {
    $('#gifSleepy').text("There was an error processing your request. Please try again.");
  });

  let promise4 = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=tamagotchi poop&limit=2&offset=0&rating=G&lang=en`;
    request.onload = function() {
      if(this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise4.then(function(response){
    let body = JSON.parse(response);
    $('#gifClean').html(`<img src="${body.data[0].images.original.url}">`);
  }, function(error) {
    $('#gifClean').text("There was an error processing your request. Please try again.");
  });

  let promise5 = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=cuddle&limit=2&offset=0&rating=G&lang=en`;
    request.onload = function() {
      if(this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise5.then(function(response){
    let body = JSON.parse(response);
    $('#gifAffection').html(`<img src="${body.data[0].images.fixed_height.url}">`);
  }, function(error) {
    $('#gifAffection').text("There was an error processing your request. Please try again.");
  });
});
