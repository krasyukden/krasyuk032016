var calc = document.calc;//form name="calc" //
var tmp = 0; //?//
var newNum = false; //?//
var nextOperation = "";//без элемента - только вывод цифр на экран//

function numPressed (num) {
    if (newNum) {
        calc.result.value = num;//name=result в input//
        newNum = false;
    }	
    else {
        if (calc.result.value == "0") { //?//
            calc.result.value = num;
        }
        else {
            calc.result.value += num;
        }
    }
}

function operation (op) {
    if (!newNum) {
        switch (nextOperation) {
            case "+": 
                tmp += +(calc.result.value);
                calc.result.value = tmp;
            break;
            case "-": 
                tmp -= calc.result.value;
                calc.result.value = tmp;
            break;
            case "*": 
                tmp *= calc.result.value;
                calc.result.value = tmp;
            break;
            case "/": 
                tmp /= calc.result.value;
                calc.result.value = tmp;
            break;   
        }
    }
    tmp = +(calc.result.value);
    nextOperation = op;
    newNum = true; //?//
    if (calc.result.value === "Infinity") {
        calc.result.value = "на ноль делить нельзя!";  
    }
}
 
function decimal () {
		var curresult = calc.result.value;
		if (newNum) {
			curresult = "0."; //?//
			newNum = false;
		}
		else if (curresult.indexOf(".") == -1) { //?//
				curresult += "."; //?//
		}
		calc.result.value = curresult;
}
function deleteC() {
		tmp = 0;
		nextOperation = "";
		calc.result.value = "0";
		newNum = true;
}
function neg () {
		calc.result.value *= -1;
}
