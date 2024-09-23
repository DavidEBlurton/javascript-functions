// Simulated user login status
let isLoggedIn = true; // Change to false to test not-logged-in scenario
let cart = [];

// Function to add item to cart
function addToCart(item) {
    if (isLoggedIn) {
        cart.push(item);
        console.log(`${item} has been added to your cart.`);
    } else {
        console.log("Please log in to add items to your cart.");
    }
}

// Array of available products with prices
const products = [
    { name: "Apple", price: 1 },
    { name: "Banana", price: 0.5 },
    { name: "Orange", price: 0.75 }
];

// Function to display products
function displayProducts() {
    console.log("Available Products:");
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name} - $${product.price}`);
    });
}

// Function to calculate total cost
function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        const product = products.find(p => p.name === item);
        total += product.price;
    });
    console.log("Total Cost: $" + total.toFixed(2));
}

// Function for banking operations
let balance = 0;

function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
}

function withdraw(amount) {
    if (amount > balance) {
        console.log("Insufficient funds.");
    } else if (amount > 0) {
        balance -= amount;
        console.log(`Withdrew: $${amount}. New Balance: $${balance}`);
    } else {
        console.log("Withdrawal amount must be positive.");
    }
}

function checkBalance() {
    console.log(`Current Balance: $${balance}`);
}

