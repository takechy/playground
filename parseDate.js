//グローバル変数
// 作成するオブジェクトのインレット，アウトレット数指定
inlets = 1;
outlets = 1;


function list(args){
	var msg = "~/Desktop/spwnMultiRec";
	for(m in arguments){
		//post(arguments[m]);
		msg += "-";
		msg += arguments[m];
	}
	msg += ".wav";
	//post(msg);
	outlet(0, msg);
}