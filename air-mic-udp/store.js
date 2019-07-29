outlets = 1;
function list(){
  var buf = new Buffer("store");
  var frame = buf.framecount;
  var seek_buf = new Buffer("seek");
  var seek = seek_buf.peek(1, 0);
  var data = arrayfromargs(arguments);
  seek = parseInt(seek);
  //post(frame);
  outlet(0, seek);
  buf.poke(1, seek, data);
  var sum = seek + 280;
  if(sum >= 2880 ){
    seek_buf.poke(1, 0, 0);
  }else{
    seek_buf.poke(1, 0, sum);
  }

}
