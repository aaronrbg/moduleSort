//Create a module that exports a function that takes a number
//as a parameter and stores it in a list. The list should not
//be accessible from outside the module.

// Export another function that returns a version of the
//data list that is sorted in ascending order. The function
//you use to sort the data correctly should not be accessible
//from outside the module. (Think back to the Custom Sorting
//Exercise when handling sorting)

//INPUT: a number
//stores it in a list outside of the function

var list = [];

function addToList(input) {
 list.push(input);
}

//INPUT: list
//OUTPUT: sorted list

function sortList(input) {
  var sorted = list.sort(function(a,b){
    return a - b;
  });
  return sorted;
}

function returnSorted() {
  var output = sortList();
  return output;
}

module.exports = {
  addToList : addToList,
  returnSorted: returnSorted
};
