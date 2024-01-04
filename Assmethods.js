let myFoodList = ["Rice", "Beans", "Yam", "Potatoes", "Spaghetti", "Yam"];

// Step 1: Remove "Potatoes" using filter() method
myFoodList = myFoodList.filter(list=> list !== "Potatoes");

// Step 2: Add "Bitter-cola" and "Pepsi" using concat() method
myFoodList = myFoodList.concat("Bitter-cola", "Pepsi");

console.log(myFoodList);
