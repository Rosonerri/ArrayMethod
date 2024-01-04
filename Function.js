//Dynamic Function: Replacing the third index position of a string with "z"
function replacePosition(name){
    let myCase = name.toUpperCase();
    let spliting = myCase.split("")
    let splicing = spliting.splice(3,2, "Z");
    return spliting
}
console.log(replacePosition("Ibrahimovic"))
//Dynamic Function: reversing a name string



function reverseName(name){
    let splitting = name.split("");
    let myReverse = splitting.reverse()
    return splitting
}
console.log(reverseName("ibrahimovic"));

//Map

