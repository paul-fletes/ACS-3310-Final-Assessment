const { formatDistanceToNow } = require("date-fns");
const strFunc = require('@paul-fletes/acs-3310-js-string-library')
const data = require('./data.json');

// Challenge 0: Import data from data.json
const dataObj = data[0];
console.log(dataObj)

// Challenge 1: Print first and last names uppercased
const firstName = strFunc.capitalize(dataObj.first_name)
const lastName = strFunc.capitalize(dataObj.last_name)
console.log(`${firstName} ${lastName}`)

// Challege 2: Format and print the purchase date
const purchaseDate = new Date(dataObj.purchased);
const purchasedFormatted = `Purchased: ${purchaseDate.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})}`
console.log(purchasedFormatted)



// Challege 3: Format and print date as "x time ago"
const lastPaymentDate = new Date(dataObj.lastpayment);
const lastPaymentFormatted = `Last Payment: ${formatDistanceToNow(lastPaymentDate, {
  addSuffix: true,
})}`;
console.log(lastPaymentFormatted)


