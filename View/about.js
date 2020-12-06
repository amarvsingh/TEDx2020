
var canvas;
var width, height;
var xes = [];
var no = 100;


function setup() {
    width = document.getElementById('about-background').offsetWidth;
    height = document.getElementById('about-background').offsetHeight;
    canvas = createCanvas(width,height);
    canvas.parent("about-background");
    for(let i=0 ;i<no; i++){
      xes[i] = new X();
    }
  }
  
  function draw() {
    if(isInViewport(document.getElementById('about-background'))){
      background(230);
      for(let i=0 ;i<no; i++){
        xes[i].show();
        xes[i].update();
        xes[i].barrier();
      }
    }
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 ||
        rect.left >= 0 ||
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) ||
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

  function windowResized() {
    width = document.getElementById('about-background').offsetWidth;
    height = document.getElementById('about-background').offsetHeight;
    resizeCanvas(width, height);
  }

  function X(){
      this.pos = createVector(random(0,width),-25);
      this.vel = p5.Vector.random2D();
      this.acc = createVector();
      this.r = random();
      this.rate = random(0, 0.05);
      this.c = color('hsba(160, 100%, 50%, 0.5)');


      this.show = function(){
          translate(this.pos.x,this.pos.y);
          fill(200);
          strokeWeight(3.5);
          stroke(this.c);
          rotate(this.r);
          line(0,0,22.5,25);
          line(22.5,0,0,25);          
          this.r += this.rate;       
          resetMatrix();
      }

      this.barrier = function(){
        if(this.pos.x >= width || this.pos.x <= 0){
          this.vel.x *= -1.0;
        }
        if(this.pos.y >= height || this.pos.y <= -50){
          this.vel.y *= -1.0;
        }
      }

      this.update = function(){
           this.vel.add(this.acc);
           this.pos.add(this.vel);
           this.acc.mult(0);
      }
  }