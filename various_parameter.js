//for a given string tell me whether it has even number of characters or not
function evenSizeString(str){
    console.log(str)
    const size =str.length;
    console.log(str, size)
    if(size%2===0){
        console.log('even size')
        return true
    }
    else{
        console.log('odd size')
        return false
    }
}

evenSizeString('Dhaka')
evenSizeString('Madagascar')

function doubleOrTriple(numnber, doDouble){
    if(doDouble===true){
        const result=numnber*2;
        return result;
    }
    else{
        const result=numnber*3;
        return result;
    }
}

const double=doubleOrTriple(5,true);
const double1=doubleOrTriple(5,false);
console.log(double)
console.log(double1)

