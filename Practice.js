//dynamic function
let sampleArray = ["Red", "Green", "White", "Black", "Indigo", "Purple", "Yellow"];

function tostring(myString){
    myString = myString.join(", ");
    return myString
}
console.log(tostring(sampleArray))
//Dynamic Function to remove the last element of sample array 
function getLast(lastEl){
    lastEl = lastEl.pop()
    return lastEl
}
console.log(getLast(sampleArray))
console.log(sampleArray)

//Dynamic Function to check Palindrone word
let palindrome = ["civica", "radar", "level", "rotor","kayak", "madam", "refer"]
function pally(palin){
    palin = palin.join("").toLowerCase().split(" ").reverse()
    return palin.includes(palin)
}
console.log(pally(["level"]))

let emptyArr = []
console.log(emptyArr)
emptyArr.push("1", "2", "10", "12", "13", "14", "13")
console.log(emptyArr)
emptyArr[2] = "22"
console.log(emptyArr);
emptyArr.pop()
emptyArr.shift()
console.log(emptyArr)

//Nested  Functions to nest and sort an An Array
let myArray = [1, 10, 8, [3, 5,[2]],[4, 8, 6]] 
function Nested(myNest){
    let Arr = myNest.sort()
    // let Arr1 = Arr.flat(2)
    return Arr
}
console.log(Nested([1, 10, 8]))
// console.log(myNest)

// function to remove an element from the array "word"

let foodStuffts = ["Rice" , "Beans" , "Palm Oil" , "Tomatoes" , "Vegetable Oil" , "Chicken"]
function removeEL(){
    let deleting = foodStuffts.shift();
    return deleting
}
console.log(removeEL())
console.log(foodStuffts)


