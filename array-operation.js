/**
 * objective: write a function to give me the sum of all numbers in an array.
 */

function sumOfnumbers(numbers){
    let sum=0;
    for(const number of numbers){
        console.log(number)
         sum=sum+number;

    }
    return sum
   

}

const nums=[4,8,54,54,854,74]
const sum=sumOfnumbers(nums)
console.log('sum of number is:',sum)