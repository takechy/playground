outlets = 1
function bang(){
  var header = new Buffer("header");
  var store = new Buffer("store");
  var seek = new Buffer("seek");
  var frames = store.framecount();
  var samples = [];
  var i = seek.peek(1,0);
  var i = parseFloat(i); // necessary
  switch (i / 288) {
    case 0:
      samples = store.poke(1,0,288);
      header.poke(1,0,samples);
      for(i in samples){
        post();
        post(samples[i]);
      }
      break;
    case 1:
      samples = store.poke(1,i-288,288);
      header.poke(1,0,samples);
      break;
    case 2:
      samples = store.poke(1,i-288,288);
      header.poke(1,0,samples);
      break;
    case 3:
      samples = store.poke(1,i-288,288);
      header.poke(1,0,samples);
      break;
    case 4:
      samples = store.poke(1,i-288,288);
      header.poke(1,0,samples);
      break;
    case 5:
      samples = store.poke(1,i-288,288);
      header.poke(1,0,samples);
      break;
    case 6:
      samples = store.poke(1,i-288,288);
      header.poke(1,0,samples);
      break;
    case 7:
      samples = store.poke(1,i-288,288);
      header.poke(1,0,samples);
      break;
    case 8:
      samples = store.poke(1,i-288,288);
      header.poke(1,0,samples);
      break;
    case 9:
      samples = store.poke(1,i-288,288);
      header.poke(1,0,samples);
      break;
    case 10:
      samples = store.poke(1,i-288,288);
      header.poke(1,0,samples);
      break;
    default:
      break;
  }

  outlet(0, i);
}
