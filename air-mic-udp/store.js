outlets = 1;
function list(){
  var data = arrayfromargs(arguments);
  var buf = new Buffer("store");
  buf.poke(0, 0, data);
  outlet(0, data[0]);
}
