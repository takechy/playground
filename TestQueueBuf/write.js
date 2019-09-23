outlets = 1;
head = new Global("head");
head.w = 230000;
head.ringSize = 240000;



function list(){
	var buf = new Buffer("ring");
    var samples = arrayfromargs(arguments);
    buf.poke(1, head.w, samples);
    head.w += samples.length - 1;
    if(head.w >= head.ringSize){head.w = 0};
    outlet(0, head.w);
}