'use strict';

function retrieveInput(){
    
    let howMany = $('#js-input').val();
    if(howMany >=1 && howMany <=50){
        getDogImages(howMany);
    }
    else{
     let howMany = 3;
      getDogImages(howMany);
    }

}

function getDogImages(numOfDogs){
    for(let i = 1; i <= numOfDogs; i++){
       console.log(`The number of dogs is ${numOfDogs}`);
       fetch('https://dog.ceo/api/breeds/image/random').
       then(response => response.json()).
       then(responseJson => getResults(responseJson)).
       catch(error => alert("Sorry an unexpected error occured. Try again later."));
    }
    displayResults();
 

}
    

function getResults(jsonMessage){
    let url = jsonMessage.message;
    console.log(url);
    $(".results").append(`<img src = "${url}" class = "img-results">`);

   // $('.img-results').replaceWith(`<img src = "${url}" class = "img-results">`);

}

function displayResults(){
    $('.results').removeClass("hidden"); 

    }  



function watchForm(){
    $("form").submit(function(){
        event.preventDefault();
        retrieveInput();
      }
    )}

$(function(){
    console.log("App ready and waiting for submit");
    watchForm();
    
});