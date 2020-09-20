const height = 1000;
const width = 1000;
let v;
let v2;
let v3;
let v4;
let startPX = 250;
let startPY = 250;
let len = 400;

let segments;

function setup(){

  createCanvas(width, height)
  background(0)
  segments = []

  v = createVector(startPX, startPY) //top left corner
  v2 = createVector(startPX + len, startPY) //top right 
  v3 = createVector(startPX + len, startPY + len) //bottom right
  v4 = createVector(startPX, startPY + len) // bottom left

  let segmentT = new Segment(v, v2) //top side
  let segmentR = new Segment(v2, v3) //right side
  let segmentB = new Segment(v3, v4) //bottom side
  let segmentL = new Segment(v4, v) //left side

  segments.push(segmentT);
  segments.push(segmentR);
  segments.push(segmentB);
  segments.push(segmentL);

  stroke(255)
  strokeWeight(.5)
  segmentT.draw();
  segmentR.draw();
  segmentB.draw();
  segmentL.draw();

}

function mouseClicked(){
  generate();
}

function generate(){
  background(0)
  let next = []

  for(let i = 0; i < segments.length; i++){
    let segment = segments[i]
    let p1 = segment.p1()
    let p2 = segment.p2()
    let p3 = segment.p3()
    let p4 = segment.p4()
    let p5 = segment.p5()
    let p6 = segment.p6()


    let nl1 = new Segment(p1, p2)
    let nl2 = new Segment(p2, p3)
    let nl3 = new Segment(p3, p4)
    let nl4 = new Segment(p4, p5)
    let nl5 = new Segment(p5, p6)

    nl1.draw()
    nl2.draw()
    nl3.draw()
    nl4.draw()
    nl5.draw()

    // line(nl1.x, nl1.y, nl2.x, nl2.y)
    // line(nl2.x, nl2.y, nl3.x, nl3.y)
    // line(nl3.x, nl3.y, nl4.x, nl4.y)
    // line(nl4.x, nl4.y, nl5.x, nl5.y)
    // line(nl5.x, nl5.y, nl6.x, nl6.y)

    next.push(nl1)
    next.push(nl2)
    next.push(nl3)
    next.push(nl4)
    next.push(nl5)

  }
  segments = next
}
