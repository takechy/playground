
function msg_int(index){
  var seek = new Buffer("seek");
  switch (index) {
    case 0:
      seek.poke(1, 0, 0);
      break;
    default:
  }
  outlet(0, seek.peek(1,0));
}
