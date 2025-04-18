let num = "";
let banglaNumber = (নাম্বার) => {
    let নাম্বারমালা = নাম্বার.split("");

    নাম্বারমালা.forEach(a => {
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
    });
    
    return Number(num);
}

module.exports = banglaNumber;