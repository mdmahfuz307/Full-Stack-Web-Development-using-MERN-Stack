//String Methods and Properties
//toUpperCase()
//toLowerCase()
//trim()
//trimStat()
//trimEnd()

const UpperLetter = 'tme ami r k?';
console.log(UpperLetter.toUpperCase()); //Print upperCase Letters


const lowerLetter = 'TME AMI R K?';
console.log(lowerLetter.toLowerCase()); //Print LowerCase Letters


// String trim methods
const extraSpace = '     In THe word     '; //here the space
console.log(extraSpace.trim()); //Print without the space


// Useing Trim Start() Index and End() index
const startSpace = '     In THe word'; //Start space
console.log(extraSpace.trimStart());


const endSpace = 'In THe word         ';  //End space
console.log(endSpace.trimEnd());

