// Task 1
let products = ["Basketball", "Football","Baseball", "Tennis Ball", "Golf Ball"];

products.push("Pickleball"); 

console.log(products);

products.pop();

console.log("New Products:",products)

//Task 2
let scores = [95, 90, 55, 70, 100]; 
scores[3] = 80;

let total = scores.reduce((a, b) => a + b, 0);
let average = total / scores.length ;

console.log("New Scores", scores);
console.log(total);
console.log("Average Score:",average);

// Task 3
let employee ={
    name: "Randy Johnson",
    age: 61,
    department: "Catcher",
    isActive: true
};

console.log(employee);
employee.department = "Pitcher"
employee.position = "Player";

console.log(employee);