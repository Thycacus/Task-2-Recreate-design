function setup(){
	createCanvas(500, 600);
}

function draw(){
	background('#093D64');
  fill(125)
  triangle(100,550,250,200,400,550 )
  fill(255,156,156)
  triangle(200,400,250,200,300,400 )
	translate(250, 250); 

  rotate(radians(frameCount));

	noStroke();
  var c = color('#ffad33');  
  fill(255,230,208)
  ellipse(20, 20, 200, 200)
  fill(c); 
  ellipse(100, 100, 250, 250);

}  

