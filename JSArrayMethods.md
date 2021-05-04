# JS Array Methods

## map
Create a new array with the result of the callback function (this function is executed for each item same as forEach)
#### Examples
const users = [
    {name:'Luis', age:15},
    {name:'Jose', age:18},
    {name:'Aaron', age:40}
];
const userDescriptions = users.map(item => {
   return `Hello my name is ${item.name} and I have ${item.age} years old.`
});
console.log(userDescriptions); 
/*["Hello my name is Luis and I have 15 years old.",
 "Hello my name is Jose and I have 18 years old.",
 "Hello my name is Aaron and I have 40 years old."] */
#### Time Complexity
linear- 0(n) 

## reduce
Return a single value after applying the reduction function for each element.
#### Examples
const users = [
  {name:'Luis', age:15},
  {name:'Jose', age:18},
  {name:'Aaron', age:40}
];

const reducer= (accumulator, item)=> accumulator + item.age;
const totalAge =  users.reduce(reducer,0);
const ageAverage = totalAge / users.length;
console.log(`Total ${totalAge}, Average ${ageAverage}`); // Total 73, Average 24.333333333333332

#### Time Complexity
linear- 0(n) 


## filter
Create a new array with the elements that apply the given filter condition as true.
#### Examples
const users = [
  {name:'Luis', admin:true},
  {name:'Jose', admin:true},
  {name:'Aaron'}
];
const adminUsers =  users.filter(item => item.admin);
console.log(adminUsers); // [{name: "Luis", admin: true},{name: "Jose", admin: true}]

#### Time Complexity
linear- 0(n) 


## forEach
Iterates over an array just like a for loop and returns undefined. Just execute a function for each element in the array.
#### Examples
const names = ['Luis','Jose','John','Aaron'];

names.forEach(item => {
    console.log(item);
}); 
/* Print all user names
  Luis Jose John  Aaron 
*/ 
#### Time Complexity
linear- 0(n) 

## sort
Modify the array, ordered by a compare Function, or if this compare function is not provided the default order is by the position of the Unicode values in the array.
#### Examples
const names = ['Luis','Jose','John','Aaron'];
console.log(names.sort()); // (4) ["Aaron", "John", "Jose", "Luis"]

const numbers = [1,5,8,7,9,3];
console.log(numbers.sort((a,b) => a-b); // (4) [1,3,5,7,8,9]

/*complex sorting*/
const users = [
    {name:'Luis', age:25},
    {name:'Jose', age:20},
    {name:'Aaron', age:40}
];
const compareFuc = (item1,item2) => {
  return item1.age - item2.age;
};
console.log(users.sort(compareFuc));
/**
 [{name: "Jose", age: 20}, {name: "Luis", age: 25}, {name: "Aaron", age:40}]
 */

#### Time Complexity
quadratic- O(n^2) for small arrays
linear logarithmic- 0(n log(n)) for arrays with more than 10 items

#### Space Complexity
constant O(1)for small array <10 
logarithymic O(log(n))

## slice
Return a copy of a sub array between two index, start and end.
Important Note: if you modify the original array, the value also will be modify in the copy array.
#### Examples
const users = [
  {name:'Luis', age:15},
  {name:'Jose', age:18},
  {name:'Aaron', age:40}
];

const  adults = users.slice(1, users.length);
console.log(adults); // (2) [{name: "Jose", age: 18}, {name: "Aaron", age: 40}]

#### Time Complexity
linear- 0(n) 

## splice
Remove, add or replace a new element indicate by index.
first arguement represents the position where you want to make the change, second arguement represents the number of changes you want to 
make and the last arguements represent what you want to insert into the array
#### Examples
const names = ['Luis','John','Jose','Aaron'];
console.log(names.splice(0,0,"Fernando")); // replace Fernando to Michelle
console.log(names.splice(0,1,"Michelle")); // Add Michelle 
console.log(names.splice(0,1)); // remove Michelle
console.log(names);

#### Time Complexity
linear- 0(n) 

## concat
Create a new array with the union of two or more arrays.
#### Examples
const names1 = ["Luis","Jose"];
const names2 = ["John","Aaron"];
const newArray = names1.concat(names2,["Michelle"]);
console.log(newArray); // (5) ["Luis", "Jose", "John", "Aaron", "Michelle"]

#### Time Complexity
linear- 0(n) 


## pop
Delete the last element of the array
#### Examples
const names = ['Luis','John','Jose','Aaron'];
console.log(names.pop()); //Aaron
console.log(names.pop()); //Jose
console.log(names); // (2) ["Luis", "John"]
#### Time Complexity
constant - 0(1) 


## shift
Delete the first element of the array
#### Examples
const names = ['Luis','John','Jose','Aaron'];
console.log(names.shift()); // Luis
console.log(names.shift()); // John
console.log(names.shift()); // Jose
console.log(names); // (1) ["Aaron"]
#### Time Complexity
linear- 0(n) 


## push
Add a new element to the end of the array.
#### Examples
const names = ['Luis','John','Jose'];
names.push("Aaron");
names.push("John");
names.push("Eliezer");
console.log(names); // (6) ["Luis", "John", "Jose", "Aaron", "John", "Eliezer"]
#### Time Complexity
constant - 0(1) 


## unshift
Add one or more elements in the beginning of the array
#### Examples
const names = ['Luis','John','Jose'];
console.log(names.unshift("Aaron")); // 4
console.log(names.unshift("Eliezer")); // 5
console.log(names.unshift("Moses")); // 6
console.log(names.unshift("Mark")); // 7
console.log(names); // (4) ["Mark", "Moses", "Eliezer", "Aaron", "Luis", "John", "Jose"]
#### Time Complexity
linear- 0(n) 

## includes
## indexOf
Return the first index of the element that exists in the array, and if not exists return-1.
#### Examples
const names = ['Luis','Jose','John','Aaron'];
console.log(names.indexOf("John")); // 2
console.log(names.indexOf("Luis")); // 0
console.log(names.indexOf("Michelle")); // -1
#### Time Complexity
linear- 0(n) 

## some
Return a boolean value as true if found one or more item that apply the given condition, and return false if not (also if the array is empty).
#### Examples
const users = [
  {name:'Luis', admin:true},
  {name:'Jose'},
  {name:'Aaron'}
];
const adminExists = users.some(item => item.admin);
console.log(adminExists); // true

#### Time Complexity
linear- 0(n) 

## every
This function Return a boolean value as true if all the items apply the given condition, and false if not.
#### Examples
const users = [
  {name:'Luis', active:true},
  {name:'Jose', active:true},
  {name:'Aaron', active:false}
];
const isAllUsersActive = users.every(item => item.active);
console.log(isAllUsersActive); // false

#### Time Complexity
linear- 0(n) 