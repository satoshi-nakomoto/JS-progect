const array = [1, 2, 5, 8, 5, 6, 7, 3, 9, 10, 15, 12, 13, 14, 12]

let count = 0
let lineralSearh = (array, item) => {
    for(let key = 0; key < array.length; key++){
        count += 1
        if(array[key] == item){
            return key           
        }
    }  
    return null  
}

console.dir(`Nomber El :  ${lineralSearh(array, 3)}`)
console.dir(`amount itteratibl : ${count}`)


// function statment

function a(num) { // name a have one parametr num
    return num * num // return parametr func myltiply on yourself
}

// function expressin
const factorial = function fact(n){
    return n < 2 ? 1 : n * fact(n -1)
}
console.dir(factorial(5))


console.dir(aquair(5)) // hoisting allow up function only in expression

function aquair(n){ // expression
    return n * n
}

//const aquair = (n) => n * n // error function not initialization


// rekursia
const factor = (n) => {
    return n == 0 ?? n == 1 ? 1 : n * factor(n -1)
}
console.dir(factor(5))

let b, c, d


b = factor(2)
c = factor(3)
d = factor(5)


//function scoup
let q, o  // this variable global

const fn = () => { // funciton  global scoup
    const a = 0 // htis variable local

    const fn2 = () => { // function local scoup
        q + b       // b global  a local
    }
}

let loop = (node) => {
if(node < 0) return
    console.dir(`begin : ${node}`)
    loop(node -1)
    console.dir(`end : ${node}`)
}
loop(3)
//begin : 3
//begin : 0
//begin : 1
//begin : 2
//end : 0
//end : 1
//end : 2
//end : 3

// clousure 

const addzn = (a, b) => {
    const zn = (x) =>  x * x 
    return zn(a) + zn(b)    
}
console.dir(addzn(2, 2))

const outside = (m) => {
    const inside = (n) => {
         return m + n
    }
    return inside
}
const ins = outside(3)
console.dir( ins(5))
//outside(3)(5)  one in one

function A(x) {
    function B(y) {
                function C(z) {
                    console.log(x + y + z);
                }
      C(3);
    }
    B(2);
  }
  A(1); 

//  function outside() {
//    var x = 5;
//    function inside(x) {
//      return x * 2;  // conflict x variable and x parametr
//    }
//    return inside;
//  }
  
//  outside()(10); //

//closure замыкание

const scoup = (name) => {
    const inScoup = () => {
        return name
    }
    return inScoup
}
console.dir( scoup('Bobyrev Vladislav')() )



function muContact(separator) {
    let result = ''
    let i = 0

    for(i = 1; i < arguments.length; i++){
        result += arguments[i] +separator
    }
    return result
}
   console.dir( muContact('!', 'hello', ' my name Vladislav firstname Bobyrev'))

function val (){
    for(value in arguments){
        console.dir(value)
    }
}
val(1, 2, 3, 4)

//let valTwo = () => {
//    for(value in arguments){
//        console.dir(value)
//    }
//}
//valTwo(1, 2, 3)  // err !! arguments is psevdomassiv

function multipl(a, b){
    b = typeof b !== 'undefined' ? b : 1
    return a * b
}
console.dir( multipl(2, 6))


let mute = (a, b = 777) => { //значение по умолчпнию если параметр небыл передан присвоиться 1
    console.dir(b)
}
mute(3)

function arc (a, ...theArc) {
    console.dir(theArc) // this map
    console.dir(a)
}

arc(3, 4, 5, 5, 6, 9)