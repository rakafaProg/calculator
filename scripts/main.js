var calc = {
    x1: document.getElementById("x"),
    y1: document.getElementById("y"),
    btn1: document.getElementById("btn"),
    result: document.getElementById("result"),
    calcNow: function() {
        var op = document.querySelector('input[name="op"]:checked');
        console.log(calc.x1);
        this.x1 = document.getElementById("x");
        this.y1 = document.getElementById("y");
        var num1 = Number.parseFloat(this.x1.value);
        var num2 = Number.parseFloat(this.y1.value);
        
        if(typeof(num1) != "number" || typeof(num2) != "number" || Number.isNaN(num1) || Number.isNaN(num2))
            result.innerHTML = "Error! please insert only numbers!";
        else {
            switch (op.value) {
                case '+': 
                    result.innerHTML =  num1 + num2;
                    break;
                case '-': 
                    result.innerHTML =  num1 - num2;
                    break;
                case '*':
                    result.innerHTML =  num1 * num2;
                    break;
                case '/':
                    result.innerHTML =  num1 / num2;
                    break;
                default: 
                    result.innerHTML =  "error";

            }
        }
    }
}

btn.addEventListener("click", calc.calcNow, true);


