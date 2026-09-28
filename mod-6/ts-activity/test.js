// ES6 Module Syntax
import { processData } from './dist/dataProcessor.js'

// CommonJS Syntax 
// const { processData } = require('./dist/dataProcessor');
 
const sampleData = [
  { id: '1', name: 'Product A', price: 100, discountedPrice: 80 },
  { id: '2', price: 200 },
  { id: '3', name: 'Product C' },
];
 
console.log(processData(sampleData));