var num = prompt("HOW MANY MILES ")

console.log(num)

num = Number(num)

console.log(num)

let kiloValue = num * 1.60934
console.log(kiloValue)

let message = `${num} miles is equal to ${kiloValue}kilometers`


let checknum = 5
if(checknum){
  console.log("checknum is true")
}

if(checknum > 50){
  console.log("its bigger than 50")

}
console.log(checknum)


if(checknum > 10){
  console.log("Yes greater than 10")
 game
}else{
  console.log("that was false")
}

//Ternary operator 

let val = 3;
let status = (val % 2)? "odd":"even"
console.log(val)
console.log(status)


let userage = prompt("how old are you")
console.log(userage)

userage = Number(userage)
let message = userage >= 17 ?"allow":"deny"
console.log(message)

let member = "laurence"
let usermember = (member == "laurence")
if(userage >= 17 && usermember){
  console.log("yes allow")
}else{
  console.log("no deny")
}


let mytime = 9
let output
if(mytime < 11){
  output = "goodmornig"

}else if(mytime >=11 && mytime <=17){
  output = "good afternoon"
}
else if(mytime >17 && mytime < 23){
  output = "good afternoon"
}else{
  output = "im sleeping"
}
console.log(output)

let person = "laurence"
switch(person){
  case "John":
  console.log(person + " is not my friend")
  break
  case "laurence":
  console.log("found it")
  break
  case "Steve":
  console.log("Hi steve")
  break
}