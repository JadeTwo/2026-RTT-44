const _ = require('lodash');
 
function processData(data) {
  let result = [];
 
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
 
    if (!item.id) {
      throw new Error('Data item is missing an id');
    }
 
    let processedItem = {
      id: item.id,
      name: item.name || 'Unknown',
      price: item.price || 0,
      discountedPrice: item.discountedPrice || item.price || 0,
    };
 
    result.push(processedItem);
  }
 
  return _.orderBy(result, ['discountedPrice'], ['asc']);
}
 
module.exports = { processData };