//function powers2(){
    //let num = 2

    //for(let i=0; i<7; i++){
        //console.log(num)
        //num *= 2
    //}

//}

//for(let i=0; i<3; i++){
    //powers2()
//}

//let powers2 = function(){

//}

//let powers2 = ()=>{

//}


//function squareA(){
    //let a = 5
    //a*= a
//}

//squareA()

//.log(a)

let a = 5

function squareA(){
    a *= a

    }
function square(b){
    b *= b
    return b
}

function add(a, b){
    let answer = a+b
    return answer
}

squareA()

let x = square(5)
let y = add(10, 20)

function powers2(amount){
    let num = 1
    let arr = []
    for(let i = 0; i<8; i++){
        arr.length//<that is an object with a function in it (no parentheses)
        arr.push(num) //<that is a method, which is an object with something in parentheses
        num *= 2
    }
    return arr
}

let twos = powers2(100)

//console.log(twos[twos.length-1])

//RECURSION EXAMPLE BELOW
function rec2s(){
    console.log(num)
    num *= 2
    if(num<256){
        rec2s(num)
    }

}

//rec2s(1)

function replaceAll( string, char, rep){
    if (string.indexOf(char) < 0 ){
        return string
    }
    else{
        string = string.replace(char, rep)
        if(string.indexOf(char) >= 0){
            return replaceAll(string, char, rep)
        //}else{
            //return newString
        //}
    }
}



let newName = replaceAll("nick briz", "x", "z")
//name.length //<tells u how many characters int he string
//let x = name.indexOf('i')
//name.replace('i', 'o')//<will replae the i with o, so nock

console.log(newName)
