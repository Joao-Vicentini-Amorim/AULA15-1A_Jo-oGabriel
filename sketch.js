//preparar e rodar um código 
function setup() {
  createCanvas(500, 500);//criar tela
   background('blue');
}

//função por desenhar
function draw() {
 stroke('red'); 
 fill("rgb(0,136,255)");

  if(mouseIsPressed){
    rect(mouseX, mouseY, 40, 40);
  }
}