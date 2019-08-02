outlets = 1;
function list(){
  var recieve = new Buffer("recieve");
  var data = arrayfromargs(arguments);
  recieve.poke(1, 0, data);
  outlet(0, data[0]);
}