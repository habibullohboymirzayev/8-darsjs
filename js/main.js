var elForm = document.querySelector("#cite_form");
var elInput = document.querySelector("#distance");

var elOnfoot = document.querySelector("#on_foot");
var elBybike = document.querySelector("#by_bike");
var elBycar = document.querySelector("#by_car");
var elByplane = document.querySelector("#by_plane");

var SPEED_ON_FOOT = 3.6;
var SPEED_BY_BIKE = 20.1;
var SPEED_BY_CAR = 100;
var SPEED_BY_PLANE = 800;


 var calculateHours = function (dictance, speed) {

    var hours = Math.floor(dictance / speed)
    var minutes = Math.floor(((dictance / speed) - hours) * 60)
    var seconds = Math.floor((((((dictance / speed) - hours) * 60) - minutes) * 60))

    return `${hours} soat,  ${minutes} minut,  ${seconds} sekund`
    
 }


 
 elForm.addEventListener("submit", function (evt) {
     evt.preventDefault();
     
     var inputValue = elInput.value.trim();

     if (isNaN(inputValue)) {
         return alert ('bu qiymat son emas!!!')
     }
      
     if (inputValue <= 0) {
         return alert ('0 dan katta son kiriting')
     }

      elOnfoot.textContent = calculateHours(inputValue, SPEED_ON_FOOT);
      elBybike.textContent = calculateHours(inputValue, SPEED_BY_BIKE);
      elBycar.textContent = calculateHours(inputValue, SPEED_BY_CAR);
      elByplane.textContent = calculateHours(inputValue, SPEED_BY_PLANE);





    // var hours = Math.floor(inputValue / SPEED_ON_FOOT)

    // var minutes = Math.floor(((inputValue / SPEED_ON_FOOT) - hours) * 60)

    // var seconds = Math.floor((((((inputValue / SPEED_ON_FOOT) - hours) * 60) - minutes) * 60))

    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

})