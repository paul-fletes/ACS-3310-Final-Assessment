"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatDistanceToNow = require("date-fns").formatDistanceToNow;
var strFunc = require('@paul-fletes/acs-3310-js-string-library');
var data = require('./data.json');
// Challenge 0: Import data from data.json
var dataObj = data[0];
console.log(dataObj);
// Challenge 1: Print first and last names uppercased
var firstName = strFunc.capitalize(dataObj.first_name);
var lastName = strFunc.capitalize(dataObj.last_name);
console.log("".concat(firstName, " ").concat(lastName));
// Challege 2: Format and print the purchase date
var purchaseDate = new Date(dataObj.purchased);
var purchasedFormatted = "Purchased: ".concat(purchaseDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
}));
console.log(purchasedFormatted);
// Challege 3: Format and print date as "x time ago"
var lastPaymentDate = new Date(dataObj.lastpayment);
var lastPaymentFormatted = "Last Payment: ".concat(formatDistanceToNow(lastPaymentDate, {
    addSuffix: true,
}));
console.log(lastPaymentFormatted);
// Challenge 4: Format phone number
function formatPhoneNumber(phone) {
    // Convert to string in case it's a number
    var str = String(phone);
    // Check if input has exactly 10 characters/numbers
    if (str.length !== 10 || !/^\d{10}$/.test(str)) {
        throw new Error('Invalid phone number input');
    }
    // Extract the area code, central office code, and line number
    var areaCode = str.substring(0, 3);
    var centralOfficeCode = str.substring(3, 6);
    var lineNumber = str.substring(6, 10);
    // Return the formatted phone number
    return "(".concat(areaCode, ") ").concat(centralOfficeCode, "-").concat(lineNumber);
}
exports.default = formatPhoneNumber;
var formattedPhoneNumber = formatPhoneNumber(dataObj.phone);
console.log("Phone: ".concat(formattedPhoneNumber));
