/**
 * create a function that will return only the even numbers
 * return the sum of even numbers
 */

function evenNumbersOnly(numbers){
    console.log(numbers)
    let sum=0;
    for(const number of numbers){
        console.log(number)
        if(number%2===0){
            // console.log(number)
            sum=sum+number;
        }
        
    }
    return sum;

}

const nums=[4,8,7,32,14,8,965,475,5452,882]
const sum=evenNumbersOnly(nums)
console.log('even numbers sum is:',sum)
console.log('---------------Firstpart-------------------------------')



function evenNumbersOnly1(numbers){

    console.log(numbers)
    const evens=[]
    for(const number of numbers){
        console.log(number)
        if(number%2===0){
            console.log('even numbers are:',number)
            evens.push(number)
        }
    }
    return evens
}

const numbs=[12,7,5,4,8,9,12,25,65,74,32,19]
const even=evenNumbersOnly1(numbs)
console.log(even)


function sumOfEvenNumbers(numbers){
    console.log(numbers)
    let Odd_sum=0;
    for(const number of numbers){
        console.log(number)
        if(number%2===1){
            console.log('Odd numbers are:',number)
            Odd_sum=Odd_sum+number
        }
    }
    return Odd_sum
}

const samsung=[14,41,32,34,75,15,61,28,61]
const odd_sum=sumOfEvenNumbers(samsung)
console.log('Sum of odd numbers is:',odd_sum)