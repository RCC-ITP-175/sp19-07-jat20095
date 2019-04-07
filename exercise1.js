console.log("exercise1.js start");
// INSTRUCTIONS
// Below is a customersObj object that contains balance as an integer.
// Write a function named displayBalance that accepts customerID as an
// argument and returns balance in this format $1234.56

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
    }
};




























// VERIFICATION
// These statements verify that your code does what the instructions
// ask. Do not edit these lines.
console.log(displayBalance(23567)); //should return $1536773.45
console.log(displayBalance(1234)); //should return $12354123.56
console.log(displayBalance(1531)); //should return $654324.67
console.log(displayBalance(543)); //should return $634637235.62
