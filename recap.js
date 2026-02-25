function add(price1, price2){
    const total=price1+price2;
    return total
}
const bill=add(5,87)

function add2(price1,price2){
    return price1+price2
}
const bill2=add2(7,73)
console.log(bill,bill2)

function doMath(num1,num2){
    const sum=num1+num2;
    const difference=num1-num2;
    const multi=sum*difference;
    const result=multi/2;
    return result
}
const result=doMath(10,5)
console.log(result)