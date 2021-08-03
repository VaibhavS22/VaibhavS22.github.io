
var color = [] //list in  db

var t = {} // contentful obj

var f = color.reduce((acc, currVal) => {
    Object.keys(t).forEach(i => {
        if(t[i].name === currVal){
            acc[currVal] = t[i]
        }
    })
    return acc;
},{})

var col1 = "ff0000";
var col2 = "ec3356";
var colorToBeMatched = "ffc0cb";

function hexColorDelta(hex1, hex2) {
    // get red/green/blue int values of hex1
    var r1 = parseInt(hex1.substring(0, 2), 16);
    var g1 = parseInt(hex1.substring(2, 4), 16);
    var b1 = parseInt(hex1.substring(4, 6), 16);
    // get red/green/blue int values of hex2
    var r2 = parseInt(hex2.substring(0, 2), 16);
    var g2 = parseInt(hex2.substring(2, 4), 16);
    var b2 = parseInt(hex2.substring(4, 6), 16);
    // calculate differences between reds, greens and blues
    var r = 255 - Math.abs(r1 - r2);
    var g = 255 - Math.abs(g1 - g2);
    var b = 255 - Math.abs(b1 - b2);
    // limit differences between 0 and 1
    r /= 255;
    g /= 255;
    b /= 255;
    // 0 means opposit colors, 1 means same colors
    return (r + g + b) / 3;
}

console.log(hexColorDelta(col1, colorToBeMatched)); // 0.7999999999999999 
console.log(hexColorDelta(col2, colorToBeMatched));