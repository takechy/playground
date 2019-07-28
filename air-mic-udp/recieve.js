outlets = 1;
function list(){
  var buf = new Buffer("recieve")
  var samples = arrayfromargs(arguments);
  buf.poke(1, 0, samples);
  outlet(0, samples[0]);
}
