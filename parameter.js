// 3==>3*3=9
// 8==>8*8=64
// 5==>5*5=25
// 7==>7*7=49

function square(number){
    const borgo= number*number
    console.log('Suare of the given number is:',borgo)
}

square(5)
square(7)
console.log('-----------------------------------------')
square(9)
square(3)

function add(num1, num2){
    const sum=num1*num2;
    console.log(sum)
}
add(5,5)
add(15, 5)

function addAll(a,b,c,d,e){
    const total=a+b+c+d+e;
    console.log(total)
}
console.log('----------------------------------------')
addAll(5,7,6,1,51)
addAll(10,7,6,1,21)