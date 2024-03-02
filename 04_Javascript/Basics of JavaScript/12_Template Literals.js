// Methods(with Argument)
//includes()
//indexOf()
//replace()
//replaceAll()
//concat()
//padStart()
//padEnd()
//charAt()
//charCodeAt()
//split()



////includes()
const checkValue = 'tme ami r k?';
console.log(checkValue.includes('k')); //Output is true because the value is available


//indexOf()
const checkIndexNumber = 'tme ami r k?';
console.log(checkIndexNumber.indexOf('a')); // Output is 4


//replace()
const replaceValue = 'tme ami r k?';
console.log(replaceValue.replace('ami','cara')); //Output is "tme cara r ki"


//replaceAll()
const replaceAllValue = 'Ami Jamai manush?';
console.log(replaceAllValue.replaceAll('a','A'));  // output is all A char is upperletter


//concat()
const addValue = 'Hello World!,';
console.log(addValue.concat(replaceAllValue)); // Output are 'Hello World!,Ami Jamai manush?'


//padStart()
const lastFourDigits = '78856';
console.log(lastFourDigits.padStart(12,'*'));   //Output  *******78856


//padEnd()
const firstFourDigits = '78856';
console.log(firstFourDigits.padEnd(12,'*'));  //Output 78856*******



//charAt()
const amerName = 'Md Mahfuz Rahman Nirob';
console.log(amerName.charAt(3));             //OutPut are 3Index number char



//charCodeAt()
const charCode = 'Nirob';
console.log(charCode.charCodeAt(4));   // Output are ASCII value