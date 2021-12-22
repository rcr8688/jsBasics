console.log("ravi chandra ")



function counter(){
var i=0
this.incrementcounter=function (){
i++
console.log("ravi chandra ",i)
}
this.decrementcounter=function (){
i--
console.log("ravi chandra ",i)
}
}


let inc=new counter()

inc.incrementcounter()
inc.incrementcounter()
inc.incrementcounter()
inc.incrementcounter()
inc.decrementcounter()


for(var i=0;i<5;i++){
function close(i){
setTimeout(()=>{console.log(i)},3000)
}
close(i)
}


function outer(param1){
var i="MrecMrec"
return function inner(agepram){
	console.log(i,param1,agepram)
}
}


outer(2563)(256398)



let radius=[2,5,8,9]

let area=function (radius){
return Math.PI*radius*radius
}


let diameter=function (radius){
return 2*radius
}


let curmif=function (radius){
return 2*Math.PI*radius
}

function calculate(radius,logic){
const output=[]

for(let i=0;i<radius.length;i++){
output.push(logic(radius[i]))
}
return output
}


console.log(calculate(radius,area),"Area")
console.log(calculate(radius,diameter),"diameter")
console.log(calculate(radius,curmif),"curmif")


var arr=[2,13,5,9]

function bineary(x){
return x.toString(2)
}

function isodd(x){
return  x%2
}


function isEven(x){
return  x%2 ===0
}

const output=arr.map(bineary)
const outOdd=arr.filter(isodd)
const outEvn=arr.filter(isEven)
const outreduce=arr.reduce((acc,curt)=>{
return acc+curt
},0)

const maxvalue=arr.reduce((acc,crr)=>{
if(crr>acc){
	acc=crr
}
return acc
},0)

const arr1=[
{name:"ravi",age:25},
{name:"chandra",age:20},
{name:"reddy",age:22},
{name:"rohith",age:25}
]


let countvalues=arr1.reduce((count,crr)=> {

if(count[crr.age]){
	count[crr.age] = ++count[crr.age];
}else{
count[crr.age] = 1;
}
return count
},{})
console.log(countvalues)
console.log(output,"bineary")
console.log(outOdd,"odd numbers ")
console.log(outreduce,"outreduce numbers ")
console.log(outEvn,"outEvn numbers ")

console.log( maxvalue," maxvalue numbers ")


let printName=function(town,pincode){
console.log(this.fristname+""+this.lastname+"from "+ town+" "+pincode)
}

let Sname ={
fristname:"ravi",
lastname:"chandra"
}


let name={
fristname:"rohith",
lastname:"reddy",

}
//printName.call(Sname)
printName.call(name,"pulivendula")


printName.apply(Sname,["hyd","516390"])

let cobind=printName.bind(Sname,"testing","linking")

cobind()

Function.prototype.mybind=function(...args){
let obj=this
params=args.slice(1)
return function(...args2){
obj.apply(args[0],[...params,...args2])
}
}


let xreatenewone=printName.mybind(name,"creatednewexternal")
xreatenewone("external")


// function currying 

 function volume(length) {
      return function(width) {
         return function(height) {
            return height * width * length;
         }
      }
   }
document.write(volume(11)(2)(3))