const height = 800;
const width = 800;
let v;
let v2;
let startPX = 120;
let startPY = 300;
let len = 200;

function setup(){

  createCanvas(width, height)
  background(0)


  v = createVector(startPX, startPY)
  v2 = createVector(startPX + len, startPY)
  let segment = new Segment(v, v2)

  let p1 = segment.p1()
  let p2 = segment.p2()
  let p3 = segment.p3()
  let p4 = segment.p4()
  let p5 = segment.p5()
  let p6 = segment.p6()

  stroke(255)
  line(p1.x, p1.y, p2.x, p2.y)
  line(p2.x, p2.y, p3.x, p3.y)
  line(p3.x, p3.y, p4.x, p4.y)
  line(p4.x, p4.y, p5.x, p5.y)
  line(p5.x, p5.y, p6.x, p6.y)




}

