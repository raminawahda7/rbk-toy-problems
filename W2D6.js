/*
1-Write a function called loopAString that takes one parameter, a string of characters, 
and logs all of its characters (one at a time) to the console. 
Your function should use a while loop to log each character 
from the beginning to the end of the string, then return nothing. 
Below is an example of the code running.


loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d

*/
function loopAString(string) {
  // create an index variable
  // create a loop which iterates over the input string
  // log current string character to the console
  // increment value of index variable
  var index = 0;
  var l = string.length;
  while (index < l){
  	console.log(string[index])
  	index++;
  }
}
loopAString('abcd');


// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here

function reverseStr(string){
	var index= string.length - 1;
	var reverseString = '';
	while(index >= 0){
		reverseString = reverseString + string[index];
		index--;
	}
	return reverseString;
}
reverseStr('hello');

