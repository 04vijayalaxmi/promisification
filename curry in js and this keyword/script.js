/*function sum(a,b,c){
    return a+b+c
}
console.log(sum(2,3,5))

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                 return fn(a,b,c)
            }
        }
    }
}

const curriedSum=curry(sum)
console.log(curriedSum(2)(3)(5))

const add2=curriedSum(2)
const add3=add2(3)
const add5=add3(5)
console.log(add5)*/


//this keyword


function sayMyName(name){
    console.log(`My name is ${name}`)
}

sayMyName('Walter White')
sayMyName('Heisenberg')

const person={
    name:'Vishwas',
    sayMyName:function(){
        console.log(`My name is ${this.name}`)
    },
}

//person.sayMyName()     //Implicit this keyword


function sayMyName(){
    console.log(`My Name is ${this.name}`)
}
//sayMyName.call(person)

function peson(name){
    this.name=name
}

const p1=new peson('Vishwas')
const p2=new peson('Biradar')
console.log(p1.name, p2.name)