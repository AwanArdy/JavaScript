// Declare Javascript Variables
var myNamee;

// Storing Values with the Assignment Operator
var a;
a = 7;

// Assigning the Value of One Variable to Another
var a;
a = 7;
var b;
b = a;

// Initializing Variables with the Assignment Operator
var a = 9;

// Declare String Variables
var myFirstName = "awan";
var myLastName = "ardy";

// Understanding Uninitialized Variables
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a);
console.log(b);
console.log(c);

// Understanding Case Sensitivity in Variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Explore Differences Between the var and let keywords
let catName = "Oliver";
let catSound = "Meow!";

console.log(catName);

// Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp";
let fact = "is cool!";

console.log(FCC, fact);

// Add Two Numbers with JavaScript
const summ = 10 + 10;

console.log(summ);

// Subtract One Number from Another with JavaScript
const difference = 45 - 33;

console.log(difference);

// Multiply Two Numbers with JavaScript
const product = 8 * 10;

console.log(product);

// Divide One Number by Another with JavaScript
const quotient = 66 / 33;

console.log(quotient);

// Increment a Number with JavaScript
let myVaar = 87;
myVaar++;

console.log(myVaar);

// Decrement a Number with JavaScript
let myVarr = 11;
myVarr--;

console.log(myVarr);

// Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;
var myDecimal = 2.8;

console.log(myDecimal);

// Multiply Two Decimals with JavaScript
const nogi = 2.0 * 2.5;

console.log(nogi);

// Divide One Decimal by Another with JavaScript
const saku = 4.4 / 2.0;

console.log(saku);

// Finding a Remainder in JavaScript
const remainder = 11 % 3;

console.log(remainder);

// Compound Assignment With Augmented Addition
let d = 3;
let e = 17;
let f = 12;

d += 12;
e += 9;
f += 7;

console.log(d);
console.log(e);
console.log(f);

// Compund Assigment With Augmented Subtraction
let g = 11;
let h = 9;
let i = 3;

g -= 6;
h -= 15;
i -= 1;

console.log(g);
console.log(h);
console.log(i);

// Compound Assignment With Augmented Multiplication
let j = 5;
let k = 12;
let l = 4.6;

j *= 5;
k *= 3;
l *= 10;

console.log(j);
console.log(k);
console.log(l);

// Compound Assignment With Augmented Division
let m = 48;
let n = 108;
let o = 33;

m /= 12;
n /= 4;
o /= 11;

console.log(m);
console.log(n);
console.log(o);

// Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

console.log(myStr);

// Quoting Strings with Single Quotes
const myStrr = '<a href="http://www.example.com" target="_blank">Link</a>';

console.log(myStrr);

// Escape Sequences in Strings
const mySttr = "FirstLine\n\t\\SecondLine\nThirdLine";

console.log(mySttr);

// Concatenating Strings with Plus Operator
const myStrin = "This is the start." + " This is the end.";
console.log(myStrin);

// Concatenating Strings with the PLus Equals Operator
let myStrrin = "This is the first sentence.";
myStrrin += " This is the second sentence.";

console.log(myStrrin);

// Constructing Strings with Variables
const myName = "Yoshida Ayano Christie";
const myWord = "My name is " + myName + " and I am well!";

console.log(myWord);

// Appending Variables to Strings
const someAdjective = "very very funny";
let myWordd = "Learning to code is ";
myWordd += someAdjective;

console.log(myWordd);

// Find the length of a String
let lastNameLength = 0;
const lastName = "LoveLace"

lastNameLength = lastName;
console.log(lastName.length);

// Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastNamee = "LoveLace";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

// Understand String Immutability
let myString = "Jello World";

myString = "Hello World";
console.log(myString);

// Use Bracket Notation to Find the Nth Character in a String
const lasstName = "LoveLace";

const thirdLetterOfLastName = lasstName[2];
console.log(thirdLetterOfLastName);

// Use Bracket Notation to Find the Last Character in a String
const laastName = "LoveLace";

const lastLetterOfLastName = laastName[laastName.length - 1];
console.log(lastLetterOfLastName);

// Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastNname = "LoveLace";

const secondToLastLetterOfLastName = lastNname[lastNname.length - 2];
console.log(secondToLastLetterOfLastName);

// Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb;
console.log(wordBlanks);

// Store Multiple Values in one Variable using JavaScript Arrays
const myArrayyy = ["Ogawa Aya", 16];

console.log(myArrayyy);

// Nest one Array within Another Array
const myOshi = [["Ogawa Aya", 16], ["Nibu Akari", 22]];

console.log(myOshi);

// Access Array Data with Indexes
const myArrray = [50, 60, 70];
const myDataa = myArrray[0];

console.log(myDataa);

// Modify Array Data with Indexes
const myArrayy = [18, 64, 99];
myArrayy[0] = 45;

console.log(myArrayy);

// Access Multi-Dimensional Arrays With Indexes
const myAarray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myAarray[2][1];
console.log(myData);

// Manipulate Arrays With push Method
const myArraay = [["Jhon", 23], ["cat", 2]];
myArraay.push(["dog", 3]);

console.log(myArraay);

// Manipulate Arrays With pop Method
const mmyArray = [["John", 23], ["cat", 2]];
const rremovedFromMyArray = mmyArray.pop();

console.log(mmyArray);
console.log(rremovedFromMyArray);

// Manipulate Arrays With shift Method
const myyArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myyArray.shift();

console.log(myyArray);
console.log(removedFromMyArray);

// Manipulate Arrays With unshift Method
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

console.log(myArray);

// Shopping List
const myList = [["Mie", 5], ["Sosis", 4], ["Sampo", 3], ["Sabun", 2], ["Minyak Goreng", 1]];

console.log(myList);

// Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

// Passing Values to Functions with Arguments
function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);

// Return a Value from a Function with Return
function timesFive(num) {
    return num * 5;
}

timesFive(5);
timesFive(2);
timesFive(0);

// Global Scope and Functions
let myGlobal = 10;

function fun1() {

}

var oopsGlobal = 5;

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);

}

// Local Scope and Functions
function myLocalScope() {
    const myVar = "tes";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Global vs Local Scope in Functions
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}

myOutfit();

// Understanding Undefined Value returned from a Function
let sum = 0;

function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum = sum + 5;
}

addThree();
addFive();

// Assignment with a Returned Value
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed);

// Stand in Line
function nextInLine(arr, item) {
    arr.push(item); //* Push item at the end of arr
    const removed = arr.shift(); //* Call the shift() method on arr to get the first item and store it in removed
    return removed;
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Understanding Boolean Values
function welcomeToBooleans() {
    return true;
}

// Use Conditional Logic with IF Statements
function trueOrFalse(kondisi) {
    if (kondisi) {
        return "Yes, that was true";
    }
    return "No. that was false"
}

trueOrFalse(true);
trueOrFalse(false);
console.log(false);

// Comparison with the Equality Operator
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);
console.log(testEqual);

// Comparison with the Strict Equality Operator
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

// Practice comparing different values
function compareEquality() {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

// Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

// Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val !== 17) { }
    return "Not Equal";
}
return "Equal";

// Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val) {
        return "Over 100";
    }

    if (val) {
        return "over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val >= 21) {
        return "20 or over";
    }
    if (val >= 10) {
        return "10 or over";
    }
    return "Less than 10";
}

testGreaterOrEqual(10);

// Comparison with the Less Than Operator
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);

// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

testLessOrEqual(10);

// Comparisons with the Logical and Operator
function testLogicalAnd(val) {
    if (val > 24 && val < 51) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);

// Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    if (val > 20 || val < 10) {
        return "Outside";
    }

    return "Inside";
}

testLogicalOr(15);

// Introducing Else Statements
function testElse(val) {
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    return result;
}

testElse(4);

// introducing Else If Statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

// Change this value to test
testElseIf(7);