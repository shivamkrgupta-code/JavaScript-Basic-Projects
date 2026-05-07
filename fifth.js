//generate a random color => this random color will generated from random hex value.

const randomColor = function(){
    const hex = "0123456789ABCDEF" // Creates a string containing all valid hexadecimal digits (0-9 and A-F). These are the characters used to build hex color codes.
    let color ="#" // Initializes a variable color with the # symbol, which is required at the start of every hex color code.
    for( let i =0 ;i< 6;i++){ // Starts a loop that runs 6 times (i goes from 0 to 5). This is because hex colors need 6 characters after the # (like #FF5A3D).

        color+=hex[Math.floor(Math.random () * 16)] //hex[...] uses that number as an index to pick a random character from the hex string
//+= adds that character to the color string
    }
    return color;//Returns the complete hex color code (e.g., #A3F2B1).
};

let interValid;

const StartChangingColor = function(){

    if(!interValid){ //edge case => Checks if the interval is NOT already running. The ! means "not", so this prevents starting multiple intervals if the user clicks the start button multiple times.
        interValid = setInterval(changeBgColor,1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const StopChangingColor = function(){
    clearInterval(interValid);
    interValid = null;//edge case =>Resets interValid to null (the comment "edge case" suggests this prevents issues if the user clicks stop multiple times).

};
document.querySelector("#start").addEventListener('click',StartChangingColor);
document.querySelector("#stop").addEventListener('click',StopChangingColor)