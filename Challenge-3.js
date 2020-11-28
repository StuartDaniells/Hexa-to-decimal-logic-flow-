Question 3: Write a function that converts HEX to RGB. 
Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB 
and if you enter RGB color format it returns HEX.

--------------------------V1---------------------------

const type = prompt('Enter either: \n 1. Hex to RGB \n 2. RGB to Hex \n (Enter either 1 or 2)');

const hexa = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
}

// Decimal to HEX
function hexCheck(r,rem) {
    // enumerating through the "hex" object
    for (i in hexa) {
        if(rem === Number(i)) {
            // if decimal val is betw. 10-15 add the hex equivalent to array 'r'
            return r.unshift(hexa[i]);
        }
    }
    // add remainder to the start of array
    return r.unshift(rem);
}

if (Number(type) === 2) {
    const dtH = (dec) => {
        let q = Math.round(dec);
        let r =[];
        while (q >= 16) {
            let rem = q % 16;
            hexCheck(r,rem);
            q = Math.floor(q / 16);
            (q < 16) ? hexCheck(r,q) : '' ;
        }
    
        (dec < 16) ? hexCheck(r,q) : '';
        r = r.join('');
        alert(`The Hex value of your entered RGB value is \n\n--> "${r}"`);
    }
    dtH(prompt("Enter a RGB value"));
}

// HEX to Decimal
else if (Number(type) === 1) {
    let hexVal = prompt('Please enter the HEX value');
    hexVal = parseInt(`0x${hexVal}`);
    alert(`The RGB value of your entered HEX number is \n\n--> "${hexVal}"`);
}

else{
    alert('Please enter a valid input (number)');
}

--------------------------V2---------------------------


const type = prompt('Enter either: \n 1. Hex to RGB \n 2. RGB to Hex \n (Enter either 1 or 2)');

// Decimal to HEX
if (Number(type) === 2) {
    let RGB = Number(prompt("Enter a RGB value"));
    RGB = RGB.toString(16);
    alert(`The Hex value of your entered RGB value is \n\n--> "${RGB}"`);
}
// HEX to Decimal
else if (Number(type) === 1) {
    let hexVal = prompt('Please enter the HEX value');
    hexVal = parseInt(`0x${hexVal}`);
    alert(`The RGB value of your entered HEX number is \n\n--> "${hexVal}"`);
}

else{
    alert('Please enter a valid input (number)');
}


--------------------------V3---------------------------

const type = prompt('Enter either: \n 1. Hex to RGB \n 2. RGB to Hex \n (Enter either 1 or 2)');

// Decimal to HEX
if (Number(type) === 2) {
    let RGB = Number(prompt("Enter a RGB value")).toString(16);
    alert(`The Hex value of your entered RGB value is \n\n--> "${RGB}"`);
}
// HEX to Decimal
else if (Number(type) === 1) {
    let hexVal = parseInt(`0x${prompt('Please enter the HEX value')}`);
    alert(`The RGB value of your entered HEX number is \n\n--> "${hexVal}"`);
}
else{
    alert('Please enter a valid input (number)');
}

--------------------------V4 (console output)---------------------------

const type = prompt('Enter either: \n 1. Hex to RGB \n 2. RGB to Hex \n (Enter either 1 or 2)');

let hexVal = 0;
let RGB = 0;

(Number(type) === 1) ?  (hexVal = parseInt(`0x${prompt('Please enter the HEX value')}`)) : (RGB = Number(prompt("Enter a RGB value")).toString(16));

