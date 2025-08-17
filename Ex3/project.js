// Declare variables
let balance = 0;
const transactions = [];
const categories = [ "Food", "Transport", "Entertainment", "Bills", "Other"];

// TODO: Complete the function to add a transaction with validation and update balance
function addTransaction(amount, type, category) {
    let isValid = false;

    if(typeof amount == "number" && amount > 0 &&
        (type == "income" || type == "expense") &&
        categories.includes(category)) {
        isValid = true;
    }
    if(isValid){
        const transaction = {
            amount: amount,
            type: type,
            category: category,
        };
        transactions.push(transaction);
        balance = (type == "income")? balance + amount :  balance - amount;
    } else {
        console.log("Error transaction.");
        return false;
    }
}

// TODO: Complete the function to calculate total expenses for each category
function getCategorySummary() {
    const summary = {};

    for(const category of categories){
        summary[category] = 0;
    }

    for(const transaction of transactions) {
        if(transaction.type == "expense") {
            summary[transaction.category] += transaction.amount;
        }
    }
    return summary;
}

// TODO: Complete the function to display the current balance and expenses by category
function showBudgetStatus() {
    console.log(`Current balance: $${balance.toFixed(2)}`);

    const summary = getCategorySummary();
    console.log("\nExpenses are: ");
    for(const category in summary){
        console.log(`${category}: $${summary[category].toFixed(2)}`);
    }
}


// Test the budget tracker
function runDemo() {
    // Adding sample transactions
    addTransaction(1000, "income", "Other");
    addTransaction(200, "expense", "Food");
    addTransaction(150, "expense", "Transport");
    addTransaction(300, "expense", "Entertainment");
    addTransaction(100, "expense", "Bills");

    // case handle
    addTransaction("name", "income", "Other");
    addTransaction(500, "income", "not-in");
    addTransaction(150, "pay-pay", "Other");
    
    // Show final status
    showBudgetStatus();
}

// Run the demo
runDemo();
