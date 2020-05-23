for (var i = 1; i<100; i++){
  $(".canvas").append('<div class="box"></div>');
  var counter = 0;
  var opacity = 0;                      
}

$(".box").each(function(){
  var randomOne = Math.floor(Math.random()*105);
  var randomTwo = Math.floor(Math.random()*155);
  var randomThree = Math.floor(Math.random()*255);
  
  var randomRGB = 'rgb(' + randomOne + ','  + randomTwo + ','  + randomThree + ')'
  
  $(this).css("left",Math.random()*250);
  $(this).css("top",Math.random()*250);
  $(this).css("height",counter*2).css("width",counter*2).css("border-width",counter/8).css("border-color",randomRGB).css("background-color",randomRGB)
  $(this).css("opacity",opacity).css("mix-blend-mode","difference");
  opacity = opacity + .05;
  counter++;
  
  //console.log(randomRGB);
})




$("body").mousemove(function(event) {
  var myBoxes = [];
  var topValues = [];
  var leftValues = [];
  var timing = 0;
  $(".box").each(function() {
    //console.log(timing);
    myBoxes.push($(this));
    topValues.push(event.pageY);
    leftValues.push(event.pageX);
    setTimeout(function(){
      var newBox = myBoxes.shift();
      var newTop = topValues.shift();
      var newLeft = leftValues.shift();
      newBox.css("top",(newTop+Math.random()*200)-100).css("left",(newLeft+Math.random()*200)-100);
    }, timing);
    timing = timing + 7;
  });
});


$("body").click(function(event) {
  
  $(".box").each(function(){
    var randomizer = [15, 155, 255];
    
    
    
  var randomOne = Math.floor(Math.random()*randomizer[0]);
  var randomTwo = Math.floor(Math.random()*randomizer[1]);
  var randomThree = Math.floor(Math.random()*randomizer[2]);
  
  var randomRGB = 'rgb(' + randomOne + ','  + randomTwo + ','  + randomThree + ')'
  
  $(this).css("left",Math.random()*250);
  $(this).css("top",Math.random()*250);
  $(this).css("background-color",randomRGB)
  $(this).css("opacity",opacity).css("mix-blend-mode","difference");
  opacity = opacity + .05;
  counter++;
  
  //console.log(randomRGB);
})
});




//------



