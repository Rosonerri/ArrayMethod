// let sampleArray = ["Red", "Green", "White", "Black" , "Indigo" , "Purple" , "Yellow" ];
// let foodArray = ["Rice", "Beans", "Semovita"]

// // let convert = sampleArray.toString();
// // console.log(convert);
// //static
// function myconvert(array){
//     let convertString = sampleArray.join(" , ")
//     return  convertString
// }
// console.log(myconvert())

// // Get  the Last Element of the Arrays
// //Dynamic Array
// function myArray (getArray){
//     let Poping = getArray.pop()
//     return Poping
// }
// console.log(myArray(foodArray))
// console.log(myArray(sampleArray))


//Dynamic Functions to check if these words are palindrone words
let words = ["civica", "radar", "level", "rotor","kayak", "madam", "refer"]
function mypalin(palindrone){
    let checkpalin = palindrone.toString().split("").reverse()
    return checkpalin.includes(palindrone)
}
console.log(mypalin(words))

// function to remove an element from the array "word"
function removeEL(){
    let deleting = words.splice(0,1);
    return deleting
}
console.log(removeEL())

//Creating Numbers arrays
let numbers = ["1", "2", "3", "4", "5", "6"]

// Dynamic function to Delete  the First 

function removeFL(arr) {
  arr.shift(); // Remove the first element
  arr.pop();   // Remove the last element
  return arr;  // Return the remaining elements
}

console.log(removeFL(numbers))

// combines elements in an array
let myElement = ["Volvo", "Benz", "RangeRover", "G-Wagon", "Ferarri", "Bugati", "Mazda"]
let myElement2 = ["Bungalo", "Duplex", "Mansion", "Condo"]

function combineElements(){
    let mycombine = myElement.concat(myElement2)
    return mycombine
}
console.log(combineElements())

// creating an empty array

let emptyArr = []
console.log(emptyArr)
// Using Function to add 0,1,2,3 elements into the array
//static function
function addArr(){
    let addArray = emptyArr.push("0","1","2","3")
    return addArray
}
       console.log(addArr())
       console.log(emptyArr)


//Create the string "0 + 1 + 2" out of the array using the join method and show the string.
function convertTo(){
    let convertArr = emptyArr.join("")
    return convertArr
}
    console.log(convertTo())
    //Write a Function that turns a deep array into a plain array example : [3, 2, [1, 4, [5]]] and sorts it
    function fil(deepArr){
        let deep = deepArr.flat(2).sort()
        return deep
    }
    console.log(fil([3, 2, [1, 4, [5]]]))


    let foodStuffts = ["Rice" , "Beans" , "Palm Oil" , "Tomatoes" , "Vegetable Oil" , "Chicken"]
    // Function to check if beans exist in food stuff
    function check(){
        let Checkfood = foodStuffts.includes("Beans")
        return Checkfood;
    }
    console.log(check())

    // using "foodStuffts" array, remove replace "Vegetable Oil" with "Ororo" and add "Turkey" to the array using fction
    function replaceArr(){
        foodStuffts.splice(4,1,"Ororo", "Turkey")
        return foodStuffts
    }
    console.log(replaceArr())