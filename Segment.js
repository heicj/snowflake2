class Segment {
  constructor(v1, v2){
    this.sp = v1.copy();
    this.ep = v2.copy();
  }

  p1(){
    return this.sp
  }

  p2(){
    let endCopy = this.ep.copy()
    let dist = endCopy.sub(this.sp);
    dist.div(3)
    let point = dist.add(this.sp)
    return point;  
  }

  p3(){
    let sCopy = this.sp.copy();
    let eCopy = this.ep.copy();

    let dist = eCopy.sub(sCopy);
    dist.div(3)
    sCopy.add(dist)

    angleMode(DEGREES)
    dist.rotate(-90);
    sCopy.add(dist);

    return sCopy;
  }

  p4(){
    let sCopy = this.sp.copy();
    let eCopy = this.ep.copy();

    let d = sCopy.sub(eCopy)
    d.div(3)
    eCopy.add(d);

    angleMode(DEGREES)
    d.rotate(90);
    eCopy.add(d)

    return eCopy
  }

  p5(){
    let c = this.sp.copy()
    let d = c.sub(this.ep);
    d.div(3)
    let p = d.add(this.ep)
    return p
  }

  p6(){
    return this.ep;
  }
}