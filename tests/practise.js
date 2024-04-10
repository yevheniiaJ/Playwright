// https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/879/
function reverseString(string) {
    string = string.split('').reverse();
    console.log(string);
}

reverseString('hello');
reverseString('Hello');

// https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/883/

function stringPalindrome(str) {
    firstString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    secondString = firstString.split('').reverse().join('');
    return (firstString === secondString);
}

stringPalindrome('A man, a plan, a canal: Panama');
stringPalindrome('level , is Level');

//https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/578/

function duplicateNumbers(array) {
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(duplicateNumbers([1, 6, 19, 523, 2, 6]));


