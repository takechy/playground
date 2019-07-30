outlets = 1
function bang(){
  var buf = new Buffer("bite");
  var frames = buf.framecount();
  var samples = buf.peek(1, 0, frames);
  outlet(0, samples);
}
