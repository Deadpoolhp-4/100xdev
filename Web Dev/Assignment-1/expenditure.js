function calculateTotalSpentByCategory(transactions) {
    // Use an object to store the total spent for each category
    const categoryTotals = {};

    // Iterate through each transaction
    transactions.forEach(transaction => {
        const { category, price } = transaction;

        // If the category already exists in categoryTotals, add the price to the existing total
        if (categoryTotals[category]) {
            categoryTotals[category] += price;
        } else {
            // If the category doesn't exist, create a new entry with the price
            categoryTotals[category] = price;
        }
    });

    // Convert the object to an array of objects for the desired output format
    const result = Object.keys(categoryTotals).map(category => {
        return { [category]: categoryTotals[category] };
    });

    return result;
}

// Example usage:
const transactions = [
    { itemName: 'Item1', category: 'Groceries', price: 50, timestamp: '2023-01-01' },
    { itemName: 'Item2', category: 'Electronics', price: 200, timestamp: '2023-01-02' },
    { itemName: 'Item3', category: 'Groceries', price: 30, timestamp: '2023-01-03' },
    { itemName: 'Item4', category: 'Electronics', price: 150, timestamp: '2023-01-04' },
    { itemName: 'Item5', category: 'Clothing', price: 80, timestamp: '2023-01-05' }
];

// Call the function with the example transactions
const result = calculateTotalSpentByCategory(transactions);

// Log the result to the console
console.log(result);
