var time = ''
var s = ''
var m = ''
var timer = setInterval(timing, 100)


function timing(){
  time ++

  
  if(time > 99999){
  s++
  time = ''
}
if(s > 59){
  m++
  s = ''
}
  m+= '⌷'
  s+= '⌷'
    console.log((m+='🟨') + (s+='🟩') + '  ◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎ C ◼︎ O ◼︎ M ◼︎ E ◼︎ ◼︎ ◼︎ T ◼︎ O ◼︎ ◼︎ ◼︎ B ◼︎ R ◼︎ A ◼︎ Z ◼︎ I ◼︎ L ◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎  ')
}
