let output = "Hello world"
let counter = 0

welcome(output)


function welcome(para){
  counter ++
  let temp = counter + "times run"
  console.log(para)
  console.log(temp)

}

let mynum = 50
addten(mynum)

function addten(num){
  let temp = Number(num)
  console.log(temp + 10)

}

function adder1(numOne, numTwo=5){
 
  console.log("number 1 "+numOne);
  console.log("number 2 "+numTwo)
}
function adder2(numOne, numTwo){
  numTwo = numTwo || 5;
  console.log("number 1 "+numOne);
  console.log("number 2 "+numTwo)
}

adder1(100, 100)
adder1(100)
adder2(100, 100)

let num = 100

let num2 = 200

function multiplier(a, b){
  let temp = a * b
  return temp
}

console.log(multiplier(num, num2))


let multiplier2 = function(a, b){
  let temp = a * b
  return temp
}

console.log(multiplier2(num, num2))

const btns = document.querySelectionAll('button')
console.log(btns)

let var1, var2, var3
var1 = var2 =var3 = 0
btns[0].onclick = message1
btns[1].onclick = message2
btns[2].onclick = message3

function message1(){
  var1++
  message()

}
function message2(){
  var2++
  message()

}
function message3(){
  var3++
  message()

}
function message(){
  console.log(var1 + '' + var2 + '' + var3)

}