This is a curated list of solved problems in JavaScript categorized on the type & nature of the problem which you can refer to and use as a cheat sheet for interview preparation.

It contains Data Structures & Algorithms, functions, async, closure, & hoisting-related problems.

DataStructures
[Javascript array: Complete reference.](#Javascript array: Complete reference)
Javascript Objects: Complete Reference.
Javascript String: Complete Reference.
Implement Stack data structure in javascript.
Queue data structure in javascript.
List data structure in javascript.
Linked list data structure in javascript.
Implement stack using linked list.
Implement queue using linked list.
Doubly linked list implementation in javascript.
Implement deque data structure in javascript.
Deque data structure with doubly linked list.
Circular linked list implementation in javascript.
Circular Doubly linked list in javascript.
Priority Queue Implementation in javascript.
Tree data structure in javascript.
Heap data structure in Javascript.
Treap data structure in Javascript.
Trie data structure in Javascript.
Javascript graph data structure.
AVL Tree in Javascript.
Algorithms
It contains only the important ones, you can checkout the whole list here.

Implement Stack data structure in javascript.
Print all subarrays with a given sum k in an array.
Program to check if a subarray with 0 sum exits or not.
Find distinct ways to climb the stairs in javascript.
Caesar Cipher in javascript.
Count all substrings having character k.
Number of subarrays with given sum k.
Implement a Stack using Queue.
Implement queue using two stack.
Learn how to implement two stack with an array.
Alternatively merge two different arrays.
Implement stack with max and min function.
Merge two sorted linked list.
How to find loop in linked list.
Find height and width of binary tree.
Tree traversal in Javascript.
Flood fill algorithm in javascript.
Find longest palindrome in a string.
Find all anagrams substring in a string.
Find the largest sum of contiguous subarray.
Check if binary tree has path sum.
Rotate matrix 90 degrees clockwise and anti-clockwise.
Find the intersection point of two linked list.
Trapping rain water in javascript.
Diagonal traversal of binary tree.
Check if binary tree is symmetric.
Find floor and ceil of binary search tree.
Find Least Common Ancestor (LCA) of binary tree.
Find kth smallest and largest element in BST.
Serialize and Deserialize Binary Tree.
Find inorder successor of a given key in a BST.
Find inorder predecessor of a given key in a BST.
N meetings in one room.
knapsack problem in Javascript (Bounded & Unbounded).
LRU cache in Javascript.
Fractional knapsack problem.
Longest Common Subsequence.
Longest repeated subsequence.
Longest Consecutive Sequence.
Deepest leaves sum of binary tree.
Sorting
Selection sort in javascript.
Dutch national flag problem.
Bubble sort algorithm in javascript.
Recursive Bubble sort algorithm.
Insertion sort algorithm in javascript.
Recursive Insertion Sort Algorithm.
Sorting a linked list.
Bubble sort using two stacks.
Merge sort in javascript.
Iterative merge sort algorithm.
Merge sort a linked list.
Quick sort algorithm in Javascript.
Quick sort Iterative.
Quick sort using linked list.
Heap sort algorithm in Javascript.
Iterative heap sort in Javascript.
Counting Sort Algorithm In Javascript.
Radix sort algorithm in Javascript.
Bucket Sort Algorithm.
Shell Sort Algorithm In Javascript.
Searching
Linear search algorithm in javascript.
Binary search in javascript.
Binary search in javascript.
Search in a sorted rotated array.
JavaScript specific problems.
I am currently working on this list, these are few random questions, you can find the full list here.

How to merge objects in javascript.
Compare two array or object with JavaScript.
What is debouncing in javascript?.
What is throttling in javascript?.
Number increment counter in Javascript (React).
Detect idle state (inactive) in Javascript.
Deep flatten object in Javascript – 1.
Currying in JavaScript.
Capture product visible on viewport when user stops scrolling.
Animate elements in a sequence.
Create Pausable auto incrementer.
Implement clearAllTimeout in JavaScript.
Implement ClearAllInterval in JavaScript.
Singleton design pattern in JavaScript.
Observer design pattern in JavaScript.
Remove cycle from the object in JavaScript.
Execute async functions in Series.
Retry promises N number of times in JavaScript.
In-memory filesystem library in JavaScript.
JavaScript projects.
Create simple calculator with javascript.
Whack a mole game in javascript.
Rock, Paper, Scissor, Lizard, Spock game in javascript.
Eye follow cursor in javascript.
Text typing effect in javascript.
Word falling effect in javascript.
Day night toggle switch in javascript.
Day night toggle switch in javascript.
Roman to numeral converter javascript.
Tic tac toe game in javascript with bot.

## Javascript array: Complete reference

Posted in Arrays, Data-Structures, Javascript

An array is a linear collection of the same types of data in which elements are accessed by integers. They are the simplest memory data structures. Arrays can be very fast data structures.

All programming languages have a built-in array datatype and so does javascript, but unfortunately, javascript array is not like arrays of other programming languages.

What is an array in javascript?
Instead, javascript has an object with an array like characteristics, it is significantly slower than a real array, but it is more convenient to use.

Arrays in javascript are zero indexes based which means the first value in the array is at Oth place the second element is at 1st place and so on.

Why do we need arrays?
Let us consider that we want to store all the days of the week, To store this we would do something like this.

let dayOneOfWeek = 'Monday';
let dayTwoOfWeek = 'Tuesday';
let dayThreeOfWeek = 'Wednesday';
let dayFourOfWeek = 'Thursday';
let dayFiveOfWeek = 'Friday';
let daySixOfWeek = 'Saturday';
let daySevenOfWeek = 'Sunday';Copy
This works great but imagine you have to store all the days of the month, in those case you will not keep on using a variable to store the data. Instead, we can use an array to store the collection in a single variable.

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];Copy
Creating an array in javascript
Javascript provides different notations to declare an array. Arrays in javascript are not of fixed dimension so we don’t have to specify the size while declaring them.

Syntax
//Using [] to declare an empty array
let week = []; //Simplest

//Creates an array with three days
let week = ['Monday', 'Tuesday', 'Wednesday'];

//Using constructor to declare an empty array
let week = new Array();  

//Creates an array of 7 length
let week = new Array(7); 

//Creates an array with three days
let week = new Array('Monday', 'Tuesday', 'Wednesday'); Copy
Try to use [] for declaring the arrays as they are more convenient.

As javascript arrays are objects at the end of the day we can store different types of data in a single array unlike other programming languages.

let arr = ['string', 98.6, true, false, null, undefined, null, {'name':'prashant'}, ['nested', 'array'], Infinity];Copy
We can store all the available datatypes of javascript in array even functions because functions are also object in javascript.

Array Length
Every array has a length property in javascript and we can use it to get the size of the array.

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(week.length);
//7Copy
As javascript arrays are not of fixed dimension the length property is the element at the largest index + 1. So use this cautiously.

let arr = [];
arr[1000] = 1;
console.log(arr.length);
//1001Copy
Even though we have only one element at the index 1000 we get the length of the array as 1001.

Arrays in javascript can have a max of 4,294,967,295 number of values.

Adding element in the array
Javascript arrays are very flexible and there are different ways through which we can add value to it.

Adding element at the end of the array
We can use Array.push() method to add the element at the end of the array.

let arr = [1, 2, 3, 4];
arr.push(5);
//[1, 2, 3, 4, 5];
arr.push(6, 7);
//[1, 2, 3, 4, 5, 6, 7];Copy
Alternatively we can also use the length property to add the element at the end.

let arr = [1, 2, 3, 4];
arr[arr.length] = 5;
//[1, 2, 3, 4, 5];Copy
Adding element at the beginning of the array
We can use the Array.unshift() method to add the element at the front of the array.

let arr = [2, 3, 4, 5];
arr.unshift(0, 1);
//[0, 1, 2, 3, 4, 5];Copy
It adds the given elements at the front and shifts the remaining elements.

Adding element at specific index in the array
We can use the Array.splice() method to add the element at specific index in the array.

let arr = [1, 2, 3, 5, 6];
arr.splice(3, 0, 4);
//[1, 2, 3, 4, 5, 6]Copy
Read more about the Array.splice().

Removing array elements
Javascript has many useful methods which can be used to access the array elements.

Removing element from the back of the array
We can use Array.pop() method to remove the last element from the array. This method removes and returns the last element.

let arr = [1, 2, 3, 4, 5];
let last = arr.pop();
console.log(arr);
//[1, 2, 3, 4];

console.log(last);
//5Copy
We can also use the length property to remove the elements from the array. This approach truncates the array and you will not get access to the removed elements.

let arr = [1, 2, 3, 4, 5];
arr.length = 3;
console.log(arr);
//[1, 2, 3];Copy
Setting the length explicity will delete all the elements greater than or equal to new length.

Removing element from the front of the array
We can use Array.shift() method to remove the element from the front of the array and return it.

let arr = [1, 2, 3, 4, 5];
console.log(arr.shift());
//1

console.log(arr);
//[2, 3, 4, 5]Copy
Removing element from specific position in the array
There are different methods which can be used like Array.slice, Array.splice to remove elements from the specific position in the array and return it.

```javascript
let arr = [1, 2, 3, 4, 5];

let elm = arr.splice(2, 1);
console.log(elm);
//3

let elm2 = arr.slice(2, 3);
console.log(elm2);
//4
```
Array.splice(start, count) removes all the count of elements from the start index. It mutates the original array.

Array.slice(start, end) removes all the element between the start and end index. It does not change the original array instead, returns a new copy with the element.

Using delete operator to delete an element from the array
Since javascript arrays are really objects we can use the delete operator to remove elements from the array.

```javascript
let arr = [1, 2, 3, 4, 5];
delete arr[3];
//[1, 2, 3, empty, 5];
```
As you can see using this method will leave a hole in the array as it does not remove the element at the specific index instead, it just delete it. So it is better to use splice() to remove element at specific index.

Accessing array elements
As arrays are zero indexes based we can use the numeric index to access the elements of the array.

```javascript
let arr = [1, 2, 3, 4, 5];
arr[0];
//1

arr[1];
//2

arr[2];
//3

arr[3];
//4
```
If you will to try to access the missing element element then you will get undefined.

You can also use methods mentioned in the remove elements section to retrieve the elements.

Enumerating through array
As javascript arrays are numeric index based we can use it’s length property to traverse through each element of the array.

Using for loop
```javascript
let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++){
   console.log(arr[i]);
}

//1
//2
//3
//4
//5
```
Using for ... in loop
Since javascript arrays are really objects we can use for ... in loop to iterate through each elements. However you should keep in mind that there is no guarantee of order of properties when using for ... in.

```javascript
let arr = [1, 2, 3, 4, 5];
for(let prop in arr){
  console.log(arr[prop]);
}

//1
//2
//3
//4
//5
```
Using forEach() method
We can use Array.forEach() to loop through each element of the given array.

```javascript
let arr = [1, 2, 3, 4, 5];
arr.forEach((e, i) => {
   console.log(`${e} is at index ${i}`);
});

//1 is at index 0
//2 is at index 1
//3 is at index 2
//4 is at index 3
//5 is at index 4
```
Array.forEach() function iterates through each element of the array and passes the element and the index to the callback function. We have used fat arrow function which was introduced in ES6.

Using for ... of loop
for ... of loop iterates through all the iterable objects like Strings, Arrays, Map etc.

```javascript
let arr = [1, 2, 3, 4, 5];
for(let val of arr){
   console.log(val);
}

//1
//2
//3
//4
//5
```
Sorting an array
Javascript has an inbuilt method to sort the element of the array.

```javascript
let arr = [2, 5, 3, 7, 5];
arr.sort(); //By default in ascending order
//[2, 3, 5, 5, 7];

arr.sort((a, b) => b - a);
//[7, 5, 5, 3, 2]
```
Array.sort() method takes a callback function and sort the elements based on the return value.

Searching an element in array
Javascript has good inbuilt methods which can be used to find the elements inside the array.

Using Array.indexOf()
Array.indexOf() method returns the index of the matching element. If element is not found then it will return -1.

```javascript
let arr = [2, 5, 3, 7, 5];
arr.indexOf(2);
//0

arr.indexOf(1);
//-1
```
Using Array.includes()
Array.includes() which is introduced in ES7 determines whether array contains the given element or not. It returns true or false based on the element found.

```javascript
let arr = [2, 5, 3, 7, 5];
arr.includes(2);
//true

arr.includes(1);
//false
```
Multidimensional Javascript Array
Javascript arrays are very flexible and are not usally intialized. If you want an array with initialized value then you can use Array.fill(value) to fill the array with value.

```javascript
let arr = new Array(7).fill(1);
//[1, 1, 1, 1, 1, 1, 1];
```
Javascript does not have an array of multiple dimension but like other C languages, it can have an array within an array.

```javascript
let matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];

/*
(3) [Array(3), Array(3), Array(3)]
0: (3) [1, 2, 3]
1: (3) [4, 5, 6]
2: (3) [7, 8, 9]
length: 3
__proto__: Array(0)
*/
```
You can loop through them to access all the elements.

```javascript
for(let i = 0; i < matrix.length; i++){
   for(let j = 0; j < matrix[i].length; j++){
       console.log(matrix[i][j]);
   }
}

//1
//2
//3
//4
//5
```

We use two different square brackets [][] to access the elements because the first square bracket return the array and then use the second square bracket to access the element of the returned array.

```javascript
let arr = matrix[0];
//[1, 2, 3]

arr[0]
//1

or

let arr = matrix[0][0]
//1
```
As we can have an array within an array, we can create nested arrays.

```javascript
let arr = [
   [
     [1, 2, 3],
     [3, 4, 5] 
   ],
   [
     [1, 2, 3],
     [3, 4, 5]
   ]
];

for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
    for(let k = 0; k < arr[i][j].length; k++){
        console.log(arr[i][j][k]);
    }
  }
}

//1
//2
//3
//3
//4
//5
```

Javascript arrays do not have any fixed dimension so we can also create zigzag multi dimensional array which are of different lengths.

```javascript
let arr = [
   [1, 2, 3, 4, 5],
   [1, 2],
   [1, 2, 3, 4],
   [1, 2, 3]
];
```
Always try to access the elements of the multi dimensional array with length property as their size can vary.

Check if given value is array in javascript
Javascript has an inbuilt method to check if a given value is array or not.

Using Array.isArray()
```javascript
let arr = [1, 2, 3];

Array.isArray(arr);
//true

Array.isArray('string');
//false

Array.isArray({abc: 'xyz'});
///false
```
If the browser does not support this method then you can use the below to code to create the same method.

```javascript
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```
When to use Array and When to use Objects?
A common confusion in javascript is when to use an array and when to use an object as both are objects only.

Well, it is very simple.
If you want to store and access the data in numeric sequence then use Arrays otherwise, use objects.

With the introduction of ES6, there is a list of new capabilities added to the javascript array which makes it more efficient.

Check out the complete list of Array methods in javascript.
