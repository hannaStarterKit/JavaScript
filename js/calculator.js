console.log('hello from calculator js');


var calculator = (function () {
    // var variable = {
    //     x: parseFloat(document.getElementById("firstNumber").value),
    //     y: parseFloat(document.getElementById("secondNumber").value)
    // };

    function removeWarningNaNifExist(){
        if(document.getElementById("alertWarning")){
            var alertWarning = document.getElementById("alertWarning");
            document.getElementById("alertNotNumber").removeChild(alertWarning);
        }
    };

    function numberIsFloat(number) {
        var numberIsFloat = false;
        if(!(number % 1 === 0)){
            if(!document.getElementById("alertWarning")) {
                setWarning("Warning! Number must be integer!");
            }
            numberIsFloat = true;
        }
        return numberIsFloat;
    };

    function setWarning(warningMessage){
        var alertWarning, text;
        alertWarning = document.createElement("div");
        alertWarning.setAttribute("id", "alertWarning");
        alertWarning.setAttribute("class", "alert alert-warning");
        text = document.createElement("strong");
        text.innerHTML = warningMessage;
        alertWarning.appendChild(text);
        document.getElementById("alertNotNumber").appendChild(alertWarning);
    };
    return {
        add: function () {
            var firstNumber = parseFloat(document.getElementById("firstNumber").value),
                secondNumber = parseFloat(document.getElementById("secondNumber").value);
            if(numberIsNotNaN(firstNumber) && numberIsNotNaN(secondNumber)) {
                removeWarningNaNifExist();
                document.getElementById("result").innerHTML = firstNumber + secondNumber;
            }
        },
        subtraction: function () {
            var firstNumber = parseFloat(document.getElementById("firstNumber").value),
                secondNumber = parseFloat(document.getElementById("secondNumber").value);
            if(numberIsNotNaN(firstNumber) && numberIsNotNaN(secondNumber)) {
                removeWarningNaNifExist();
                document.getElementById("result").innerHTML = firstNumber - secondNumber;
            }
        },
        multiplication: function () {
            var firstNumber = parseFloat(document.getElementById("firstNumber").value),
                secondNumber = parseFloat(document.getElementById("secondNumber").value);
            if(numberIsNotNaN(firstNumber) && numberIsNotNaN(secondNumber)) {
                removeWarningNaNifExist();
                document.getElementById("result").innerHTML = firstNumber * secondNumber;
            }
        },
        division: function () {
            var firstNumber = parseFloat(document.getElementById("firstNumber").value),
                secondNumber = parseFloat(document.getElementById("secondNumber").value);
            if(numberIsNotNaN(firstNumber) && numberIsNotNaN(secondNumber)) {
                removeWarningNaNifExist();
                document.getElementById("result").innerHTML = firstNumber / secondNumber;
            }
        },
        factorial1: function() {
            var firstNumber = parseFloat(document.getElementById("firstNumber").value);
            if(!numberIsFloat(firstNumber)) {
                removeWarningNaNifExist();
                var result = 1;
                for(var i = firstNumber; i > 1; i--){
                    result = result * i;
                }
                document.getElementById("result").innerHTML = result;
            }
        },
        factorial2: function() {
            var secondNumber = parseFloat(document.getElementById("secondNumber").value);
            if(!numberIsFloat(secondNumber)) {
                removeWarningNaNifExist();
                var result = 1;
                for(var i = secondNumber; i > 1; i--){
                    result = result * i;
                }
                document.getElementById("result").innerHTML = result;
            }
        }
    };
    function numberIsNotNaN(number){
        var numberIsNaN = true;
        if (isNaN(number)) {
            if(!document.getElementById("alertWarning")) {
                setWarning("Warning! Numbers must be correctly!")
            }
             numberIsNaN = false;
        }
        return  numberIsNaN;
    };
})();





