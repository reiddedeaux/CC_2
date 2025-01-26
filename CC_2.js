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

// Task 4
let customers = [
    {name: "Lebron James", email: "kingjames23@gmail.com", purchaseAmount: 200},
    {name: "Michael Phelps", email: "michaelphelps@gmail.com", purchaseAmount: 100},
    {name: "Tiger Woods", email: "mrfivetimes@hotmail,com", purchaseAmount: 300},
];

console.log(customers);

customers.push({name: "Tim Tebow", email: "floridaman15@gmail.com", purchaseAmount: 50});

console.log(customers);

//Task 5

let order = {
    orderId: "69",
    customerName: "Nelson Agholor",
    amount: 100,
    calculateTax: function(){
        const taxRate =.05;
        return this.amount * taxRate;
    }
}
console.log(order);
console.log(order.calculateTax()); 