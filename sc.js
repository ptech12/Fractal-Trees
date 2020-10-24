let slider, angle;
function setup() {
    createCanvas(720, 480);
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
 //   console.log(angle);
 	fill(240);
 	noStroke();
}

function draw(){
	frameRate(10);
	let a = (mouseX/width) * 180;
	angle = radians(a);
    background(0);
    stroke(255);
    translate(width/2, height);
    line(0,0,0,-120);
    translate(0, -120);
    branch(100);
    
}
function branch(l) {
	line(0,0,0, -l);
	translate(0, -l);
	if(l>1){
		push();
		rotate(angle);
		branch(l*0.67);
		
		pop();
		push();
		rotate(-angle);
		
		branch(l*0.67);
		pop();
	}
}