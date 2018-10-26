// Implement a Node.js script that imports the functionality
//of your module, adds at least 5 different data points to the
//module's data list, and outputs the sorted list.

var sortModule = require("./sortModule");

sortModule.addToList(2);
sortModule.addToList(3);
sortModule.addToList(8);
sortModule.addToList(1);
sortModule.addToList(3);
console.log(sortModule.returnSorted());
