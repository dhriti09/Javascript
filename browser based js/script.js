//var, let , const - line by line comparison
var a;
var a = 12
var username = "dhriti";//variable //program jitna bhi bada hai waha tak yeh variable exist krega  // any name//es-5 
//baad me jab bhi variable declare krenge value le lega yaha se aur access ho jaega
let a;//const es-6
    let a = 12;
const a = 12;//its constant
//also can be a=12;//its a bug

//declarization and initialization
var a; //when no value then declare
var a = 12; //pehli value dena initialize
//same with let

//window me add krta hai
// it always function scoped
// hum isko fir se declare kr skte hai aur error nhi aaega  with sam name 
var a = 13;

//dont use var
//as let does not allow one value many times and it is very secire

const discount = "50";
//do not change
//when we know this value is not going to change

//if in fun it canbe used only in function 
//func abcdd{
    //problem comes here 
    //if in if in java cript var can be used anywhre in if thats why we use let and const
    if (true) {
        var a = 12;
    }
//}

// gloabal when directly declated var

// let is block used in curly braces

/*funct abcd(){
    if (true) {
        let = 2131;
    }
}*/

//re assignmnet and redeclaration

var a;
a = 34;//reassign
var a = 233;
//it  is possible 

 
let b = 12;
b = 32;

//let b =565; //error

//temporaral dead zone-- area in which js know variable exist but cant give acess 
console.log(a);
//error came undefined
//printing before initialization
//when a given ..there is a but it giveundefined it id executed line by line 
// create variable 
let a = 12;

// hoisting impact type
var a = undefined;
// ek variable ko jab js me banate hai usk initiaal part jab js m banate hai to do hisso me toot jata hi aur uska initialization niche chala jata hai
//if we acess var  then no eroor because it divided in two psrt
var a = 12;

a = 12;


//in let 
let a = undefined;
console.log(a);
a = 12;
//it gives undefined

var x = 1;
{
    var x=2
}
console.log(a);

let x = 1;//block scope//global
{
    let x = 2
    console.log(a);//inside value 
}
console.log(a);//outside value
//object free

// DATA TYPES

// primitive in brackets not bracket reference  primitive can be copied reference not copied

//primitives
// aise sari valued jisko copy krne pr real copymil jati hai
//sting boolean number null undefined symbol bigint

// pr parent ka reference milega copy nhi milegi
// arrays[] objects{} and functions()
// jaha bracket dihe wo reference value 

let a = 12;//primitive 
let b = a;//copied so its primitive

a = a + 12;//it will be only changed in a

let a = [1, 2, 3];
let b = a;
b.pop();//value deletion

/*''
""
`` strings */
// a = 12;number
// true or false boolean
// null ka matlb hai jaanboojh kar koi value nhi di ..let selcted student =null
//kyunki abhi value pata nhi hai baadme denge

//undefined ka mtlb ek variabel banaya usko value nhi di to defalult hogi undefined  .it is given by engine
//symbol --unique immutable value
//when we use libraries jab usme kai baar fields hoti hai jisme hum bhi similar bana dete hai to wo change k deta hai
//jaise kisi ne koi ocde likha hai to wo embebded kr deta hai
let u1 = symbol("uid");
let u2 = symbol("uid");
let dhriti{
    uid:12;
    model:"jghd";

}
dhriti.uid = 1;

//reference type

let a = [1, 2, 3];
let b = a;

let a = {
    name: "dhriti",
};
let b = a;
b.name = "harshita"

//dynamic typing -no stactic typic
//isme data to change kr skte hai

// int a = 12;//in other language

let a = 12;
a = true //can be changed in differenvt data types
//type of quircks (e.g,type of nul === 'object' )

// typeof 12//it will give poutput that what is its data type

//quircks issues

// null object nan number

//type coercion (== vs ===)

// truth vs false value 

// concept jisme aapka ek type automatically convert ho jaega 

// like "5" + 1;
// outpout 51 ///only + can do
//concatinationation happened here
if (null) {
    //convert in false 
    //it covert according to nature 
    //in this all velue is  seperated in true andfalse "null 0 undefined  documnet.all like trick !!""
}


//arithematic comaprison logical assinment unary

//  =-*/% **
// = == ===
{/* <> <= >= ! != !== !! */}
    // && ||
// ? :
// 12 == 13//false 
    // 12=='12'//true 
//now triple equal as it check more dhyan se

// +"5"//convert in number and vice versa 

// ternary condituon? true hui ka code : false ka  code 
// 12 > 13 ? console.log("true ") : console.log("false ");

// a instancce of Array // A will be capital as we are using class 

let b = {}

b instanceof Object;

// instance only work with reference values

//QUESTIONS

let a = 12;
let b = 20;
if (a > 5 && b < 25) {
    console.log("A");
    
}
else {
    console.log("B");
    
}

let isAdmin = true;
let isLoggedIn = false;
if (isAdmin || isLoggedIn) {
    console.log("yes");
    
}
else {
    console.log("Access denied");
    
}

let temp = 49
   if (!(temp < 30)){
    console.log("Hot");
    
}
else {
    console.log("cold");
    
}


