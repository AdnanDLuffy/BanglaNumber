let num = "";
function banglaNumber (number) {
    let numberArray = number.split("");

    numberArray.forEach(a => {
        if (a ==="১") {
            num += "1";
        }
        else if ( a ==="২" ){
            num += "2";
        }
        else if ( a ==="৩" ){
            num += "3";
        }
        else if ( a ==="৪" ){
            num += "4";
        }
        else if ( a ==="৫" ){
            num += "5";
        }
        else if ( a ==="৬" ){
            num += "6";
        }
        else if ( a ==="৭" ){
            num += "7";
        }
        else if ( a ==="৮" ){
            num += "8";
        }
        else if ( a ==="৯" ){
            num += "9";
        }
        else if ( a ==="০" ){
            num += "0";
        }
        else if ( a ==="." ){
            num += ".";
        }
        else if ( a ==="+" ){
            num += "+";
        }
        else if ( a ==="-" ){
            num += "-";
        }
        else if ( a ==="/" ){
            num += "/";
        }
        else if ( a ==="*" ){
            num += "*";
        }
        else {
            console.log("Valid Input...")
        }
    });
    
    
    return Number(eval(num));
}


console.log(banglaNumber("১২৩২১+২৩২৩"))

module.exports = banglaNumber;
