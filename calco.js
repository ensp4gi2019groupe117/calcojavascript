
var op1 = "";
var op = "";
var op2 = "";
var result = 0;


var screen = document.getElementById("calc");
//var log = document.getElementById("log");

var previouskey = "";

document.addEventListener('keydown', function(event){
	var code = event.keyCode;
	if (code == 8){
		screen.value = "";
		op1 = "";
		op = "";
		op2 = "";
	}
}, false);

var saisie = function(key){
	if (previouskey=="="){
		screen.value = "";
		op1="";
		op="";
		op2="";
	}

	if (screen.value == "" && key=="."){
		screen.value = "0.";
	}
	else{
		screen.value = screen.value + key;
	}

	if (op==""){
		op1 = screen.value;
	}
	else{
		op2 = screen.value;
	}
	//setLog();
	previouskey = key;
};

var operation = function(key){
	//alert(op1 + " op:" + op + " op2:" + op2);
	if (op==""){
		if (op1==""){
			if (key=="-"){
				screen.value = "-";
				op1 = screen.value;
			}
			else if (key!="+"){
				alert("Erreur!!! Entrez un nombre");
			}
		}
		else{
			if (previouskey=="."){
				alert("Erreur!!! Completez le nombre reel");
			}
			else{
				op = key;
				screen.value = "";
			}
		}
	}
	else{
		if (key=="-"){
			screen.value = "-";
			op2 = screen.value;
		}
		else if (key!="+"){
			alert("Erreur!!! Entrez un nombre");
		}
	}
	//setLog();
	previouskey = key;
};

var egal = function(){
	screen.value = "";
	if (op1!="" && op!="" && op2!="") calcul();
	previouskey = "=";
};

/*var setLog = function(){
	var logval = "OP1: "+op1+", OP: "+op+", OP2: "+op2+".";
	log.value = logval;
};*/

var calcul = function(){
	screen.value = eval(op1 + "" + op + "" + op2);
	op1 = ""+screen.value;
	op = "";
	op2= "";
};

var keyboard = function(event){
	var code = event.keyCode();
	if (code == 8){
		screen.value = "";
		op1 = "";
		op = "";
		op2 = "";
	}
};

