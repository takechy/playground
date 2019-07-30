outlets = 1;
function list(){
  var store = new Buffer("store");
  var seek = new Buffer("seek");
  var data = arrayfromargs(arguments);
  var frame = 288;
  var i = seek.peek(1,0);
  var i = parseFloat(i); // necessary

  store.poke(1, i, data);
  var sum = i+frame
  outlet(0, sum);
  if(sum >= 2880){
    seek.poke(1, 0, 0);
  }else{
    seek.poke(1, 0, sum);
  }
}
