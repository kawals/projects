/***** 
 * ----------------------------------------------------------------- 
 * Function:      flatenArray
 * Description:   This arrow function flattens an array of arbitrarily nested arrays into a flat array 
 *                Reduce method is used for deep nesting, which is taking two arguments Accumulator (accum) & Current Value (value)
 *                Ternary operator: 
 *                If the element is an array it would call flatenArray function again with the given array,
 *                and the result would be concatenated to the accumulator array 
 *                otherwise it will concatenate the element with the accumulator array
 * Language:      JavaScript (ES6) 
 * Author:        Kawal                    
 * Date:          May 21, 2019
 * -----------------------------------------------------------------
*****/

flatenArray = arr => arr.reduce((accum, value) => (Array.isArray(value)) ? accum.concat(flatenArray(value)) : accum.concat(value),[]);   

let arr =[[1,2,[3]],4];
console.log(flatenArray(arr));