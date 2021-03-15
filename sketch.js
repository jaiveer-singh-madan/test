var voterCount=0;
var mamataCount=0;
var gangulyCount=0;
var owaisiCount=0;
var gandhiCount=0;
var form;

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  
  form=new Form();
  form.display();
if(voterCount===20){
  if(mamataCount>gangulyCount && mamataCount>owaisiCount && mamataCount>gandhiCount)
  {
    form.hide();
    text("5 MORE YEARS");
  }

  
  else if(gangulyCount>mamataCount && gangulyCount>owaisiCount && gangulyCount>gandhiCount)
  {
    form.hide();
    text("BJP WINS");
  }

  else if(owaisiCount>mamataCount && owaisiCount>gangulyCount && owaisiCount>gandhiCount)
  {
    form.hide();
    text("OWAISI WINS");
  }

  else if(gandhiCount>mamataCount && gandhiCount>owaisiCount && gandhiCount>gangulyCount)
  {
    form.hide();
    text("YOU JUST RUINED BENGAL");
  }

  else
  text("NO RESULT")
}
  drawSprites();
  console.log(gangulyCount);
} 