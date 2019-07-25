//グローバル変数
// 作成するオブジェクトのインレット，アウトレット数指定
	inlets = 3;
	outlets = 3;

// loadbangメッセージによって呼び出される関数
// 関数式による定義
var loadbang = function(){
    post("load max patch"); //maxウインドウに文字列表示.ラベルは'js'
    post(); //改行
}

// bangメッセージによって呼び出される関数
// 関数宣言による定義
function bang(){
    post("recieve bang message\n"); //これでも改行可能
}

// helloメッセージによって呼び出される関数
var hello = function(){
    post("hello world");
    post();
}

function repeater(){
  //post(arguments.callee.task.iterations, "\n");
  outlet(0, arguments.callee.task.iterations);
}

// inlet list func
function list() {
  //post("===the list contains", arguments.length, "elements\n");
  tsk = new Task(repeater);
  tsk.interval = 1000;
  tsk.arguments = arguments
  tsk.repeat(arguments.length - 1);
}



var print = function(){
  post("print");
}

var msg_float = function(in_val){
    outlet(0, in_val); //第１引数に出力アウトレットの番号を，第２引数に出力するデータを設定します．一番左はinlet番合0だから注意しろ！ちなみに外部スコープでは常に0だぜHAHA！
}

var msg_int = function(in_val){
    outlet(0, in_val); //第１引数に出力アウトレットの番号を，第２引数に出力するデータを設定します．一番左はinlet番合0だから注意しろ！ちなみに外部スコープでは常に0だぜHAHA！
}



//左インレット（this.inlet==0）に入力があった時は入力値にmultiplierを乗算して出力
//右インレット（this.inlet==1）に入力があった時はmultiplierを更新するのみで出力は無しという処理になってます．Maxっぽいですね．
//パッチと同ディレクトリにスクリプト配置
//jsオブジェクトでロード
//各種メッセージに対応した関数定義でトリガ
//inletはthis.inletで参照
