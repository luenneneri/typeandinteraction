/*var hours = 0;
var minutes = 0;
var seconds = 0;

setInterval(function(){ 
  $(".clock").html(hours + ":" + minutes + ":" + seconds);
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
}, 1000);*/

for (var i = 1; i<200; i++){
  $("body").append('<div class="box"></div>');
}


var counter = 0;
var opacity = 0;
var fontArray = ['Helvetica', 'Didot', 'Futura','Oxanium', 'Spartan', 'Courier Prime', 'Gupter', 'Calistoga', 'Gelasio', 'Alatsi', 'Odibee Sans', 'Inria Serif', 'Girassol', 'Alata', 'Ibarra Real Nova', 'Bebas Neue', 'Baskervville', 'Sulphur Point','Turret Road', 'Mansalva', 'Caladea'];
var salutations = ["Wazzup", "Hey yo", "What's hanging", "E aí, cara?", "Fala, mlk", "Demorô, é nóis"]                      


$(".box").each(function(){
  var font = fontArray[Math.floor(Math.random()*fontArray.length)];
  var randomOne = Math.floor(Math.random()*255);
  var randomTwo = Math.floor(Math.random()*155);
  var randomThree = Math.floor(Math.random()*55);
  
  var randomRGB = 'rgb(' + randomOne + ','  + randomTwo + ','  + randomThree + ')'
  
  //$(this).html(salutations[Math.floor(Math.random()*salutations.length)]);
  $(this).css("font-family",font).css("font-size","10px")
  $(this).css("left",Math.random()*250);
  $(this).css("top",Math.random()*250);
  $(this).css("height",counter*1).css("width",counter*1).css("border-width",counter/4).css("border-color",randomRGB).css("background-color",randomRGB)
  $(this).css("opacity",opacity).css("mix-blend-mode","difference");
  opacity = opacity + .01;
  counter++;
  
  console.log(randomRGB);
})




