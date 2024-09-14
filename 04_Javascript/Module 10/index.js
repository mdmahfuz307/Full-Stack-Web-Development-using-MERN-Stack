// 1) calculateDifference:
function calculateDifference(a, b) {
    return a - b;
}




// 2) isOdd:
function isOdd(num) {
    return num % 2 !== 0;
}




// 3) findMin:
function findMin(arr) {
    return Math.min(...arr);
}




//4) filterEvenNumbers:
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}




// 5) sortArrayDescending:
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}




// 6) lowercaseFirstLetter:
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str[0].toLowerCase() + str.slice(1);
}




// 7) countVowels:
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let cnt = 0;
    for (const char of str) {
        if (vowels.includes(char)) cnt++;
    }
    return cnt;
}




// 8) findAverage:
function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
