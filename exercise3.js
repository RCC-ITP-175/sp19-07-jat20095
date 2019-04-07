console.log("exercise3.js start");
// INSTRUCTIONS
// Step 1
// Add a title element to each customer in customerObj
// with the following data.
// Ichigo Kurosaki, title is Substitute
// Gin Ichimaru title is Captain
// Shunsui Kyoraku title is Captain
// Kisuke Urahara title is Shopkeeper
// Ulquiorra title is Espada 4

// Step 2
// Add Cifer as the last name for Ulqiorra

// Step 3
// Write a function named transaction that accepts
// an amount and customerID as parameters and alters
// that customer's balance by the amount passed and outputs
// the new balance in this format.
// Title First Last balance is now $1234.56

var customersObj = {
    23567: {
        'name': {
            'first': 'Ichigo',
            'last': 'Kurosaki'
        }, 
        'customerID': 23567,
        'balance': 153677345
    },
    1234: {
        'name': {
            'first': 'Gin',
            'last': 'Ichimaru'
        }, 
        'customerID': 1234,
        'balance': 1235412356
    },
    1531: {
        'name': {
            'first': 'Shunsui',
            'last': 'Kyoraku'
        }, 
        'customerID': 1531,
        'balance': 65432467
    },
    543: {
        'name': {
            'first': 'Kisuke',
            'last': 'Urahara'
        }, 
        'customerID': 543,
        'balance': 63463723562
    },
    667: {
        'name': {
            'first': 'Ulquiorra' 
        }, 
        'customerID': 667,
        'balance': 4562647745
    }
};



























// VERIFICATION
// These statements verify that your code does what the instructions
// ask. Do not edit these lines.
console.log(transaction(23567, 100000)); //should return Substitute Ichigo Kurosaki balance is now $1537773.45
console.log(transaction(1234, 100)); //should return Captain Gin Ichimaru balance is now $12354124.56
console.log(transaction(1531, -75432467)); //should return Captain Shunsui Kyoraku balance is now $-100000.00
console.log(transaction(543, -63463723562)); //should return Kisuke Urahara balance is now $0
console.log(transaction(667, 1)); //should return Espada Ulquiorra Cifer balance is now $45626477.46
