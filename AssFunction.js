
let sampleArray = ["Red", "Green", "White", "Black", "Indigo", "Purple", "Yellow"];
//Length of element in sampleArray
console.log(sampleArray.length)
// Join the element of an array into a string
let convert = sampleArray.toString();
console.log(convert);

//dynamic function
function tostring(myString){
    myString = myString.toString();
    return myString
}
console.log(tostring(sampleArray))

// Array Element to get the last element of an array using Function
function removeEl(){
    let remove = sampleArray.pop()
    return remove
}
console.log(removeEl())

 //Reverse palindrome words
let palindrome = ["civica", "radar", "level", "rotor","kayak", "madam", "refer"]
 console.log(palindrome.toString().toUpperCase().split("").reverse())

//Using Function to reverse  palindrome words
function reverseString(){
    let uppercase = palindrome.toString().toUpperCase()
    let splitting = uppercase.split("")
    let reversing = splitting.reverse()
    return splitting
}
console.log(reverseString());

//Remove Five(5) elements from the array 
console.log(palindrome.splice(0,1))

//Remove Five(5) elements from the array Using Function
function removeEL(){
    let deleting = palindrome.splice(0,1);
    return deleting
}
console.log(removeEL())

//Creating Numbers arrays
let numbers = ["1", "2", "3", "4", "5", "6"]


//Deleting the First and Last element
console.log(numbers.shift())
console.log(numbers)
console.log(numbers.pop())
console.log(numbers)

//Combine elements
let myElement = ["Volvo", "Benz", "RangeRover", "G-Wagon", "Ferarri", "Bugati", "Mazda"]
let myElement2 = ["Bungalo", "Duplex", "Mansion", "Condo"]

let combineElements = myElement.concat(myElement2);
console.log(combineElements)

//Creating an Empty Array
let emptyArray = new Array();
console.log(emptyArray)
//adding  0,1,2 into the empty array
let add = emptyArray.push("0","1","2");
console.log(emptyArray)

//Creating the string "0 + 1 + 2" out of the array using the join method and showing the string.
let createString = emptyArray.toString()
let joining = emptyArray.join(" + ")
console.log(joining)

// Writing a method that turns a deep array into a plain array
let nestedArray = [3, 2, [1, 4, [5]]]
let plainArray = nestedArray.flat(2);
console.log(plainArray);

//and Sort it
let sorting = plainArray.sort();
console.log(sorting);

//To check if the word "Bean" exist the array bellow
let foodStuffts = ["Rice" , "Beans" , "Palm Oil" , "Tomatoes" , "Vegetable Oil" , "Chicken"]
console.log(foodStuffts.includes("Beans"))

//using "foodStuffts" array , remove replace "Vegetable Oil" with "Ororo" and add "Turkey" to the array
console.log(foodStuffts.splice(4,1,"Ororo","Turkey"))
console.log(foodStuffts)



