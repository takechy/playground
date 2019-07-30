outlets = 2;
function list(){
  //var buf = new Buffer("recieve");
  var data = arrayfromargs(arguments);
  //buf.poke(1, 0, data);
  for(i in data){
    samp = data[i];
    outlet(0, parseFloat(i));
    outlet(1, samp);
  };
}
