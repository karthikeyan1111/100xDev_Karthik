/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/


function calculateTotalSpentByCategory(transactions) {
  let output = {};
  let finalOutput = [];
  for(let i=0;i<transactions.length; i++){
    let element = transactions[i];
    // console.log(element);
    if(!output[element['category']]){
    output[element['category']] = element['price'];
   
    }
    else{
      output[element['category']] += element['price'];
    }
  }
  for(let category in output){
    finalOutput.push(
      {
        'category': category,
        'totalSpent': output[category]
      }
    );
  }
  return finalOutput;
}

module.exports = calculateTotalSpentByCategory;
