const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

// To Demonstrate the usage of HOF - "slice"
let modifiedarray = foods.slice(1,4);
console.log(modifiedarray);

//To Demonstrate the usage of HOF - "splice"
let modifiedFood = foods.splice(2,0,"noodles", "icecream");
console.log(foods);

//To Demonstrate the usage of HOF - "filter"
const numberArray = [12,324,213,4,2,3,45,4234];
function isprime(number)
{
    var flag = true;
    for(let i = 2; i <= number/2; i++)
    {
        if(number%i == 0)
        {
            flag = false;
            console.log(flag)
            return flag;
        }
    }
    return flag;
}
var iseven = numberArray.filter(i => (i%2==0))
console.log(iseven);
var prime = numberArray.filter(i => (isprime(i)==true))
console.log(prime);
var nonprime =numberArray.filter(i => (isprime(i)==false))
console.log(nonprime);

// lambda function
let arr = [1,2,3,4]
arr.filter(value => value % 2 === 0);
console.log(arr);

//map function

let myArray = [1,2,3,4];
console.log(findSquareOfNumbers(myArray));

function findSquareOfNumbers(arr) 
{
    return arr.map(i => i*i);
} 

//Reduce Function
let array = [2, 3, 5, 10];
multiply(array);
function multiply(myArray)
{
    const sum = myArray.reduce((total,i)=>{
        return total + i;
    });  
    console.log(sum); 
}