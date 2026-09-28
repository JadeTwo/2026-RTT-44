// ES6 Module Syntax (newer)
import _ from 'lodash';
// data parameter is an array of objects that match the Data interface
function processData(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        // type guard (to check is item is undefined)
        if (item === undefined) {
            throw new Error('Data item is missing (undefined)');
        }
        // when we get here, TypeScript can figure out that it must be an object of type Data
        if (!item.id) {
            throw new Error('Data item is missing an id');
        }
        // describe this object as type Data
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
// ES6 Module Syntax
export { processData };
// CommonJS Syntax (older - default)
// module.exports = { processData };
