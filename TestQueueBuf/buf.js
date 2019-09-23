
outlets = 1

function bang(){
  var buf = new Buffer("bite")
  //post(buf);
  var frames = buf.framecount();
  //outlet(0, frames);
  var samples = buf.peek(1, 0, frames);
  //post(samples);
  outlet(0, samples);
}