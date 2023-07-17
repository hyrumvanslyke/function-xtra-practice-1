// Write a JavaScript function that reverses a number.
//Example x = 32243;
//Expected Output : 34223

// CODE HERE
function reverse_a_number(n) // creating the function and passing it the argument of 'n'
{
	n = n + ""; // turning the n variable into a string
	return n.split("").reverse().join(""); // this line breaks the code into each of its numbers then reverses it and puts it back together with .join.
}
console.log(Number(reverse_a_number(32243))); // logged to test the code.

//***************************************** */
// Write a JavaScript function that checks whether a passed string is a palindrome or not?

// CODE HERE
// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function isPalindrome(string) { // creating the function and passing it the argument of 'string'
    let length = string.length; // creating a variable to track the length of a string 
    for (let i = 0; i < length / 2; i++) { // for loop to test if each opposite index is the same.
      if (string[i] !== string[length - 1 - i]) {// if index of i === length - 1 + i it returns true else it returns false
        return false;
      }
    }
    return true;
  }
  let string1 = 'madam'; // creating variable to test the code above
  let string2 = 'nursesrun';
  let string3 = 'fox';
  console.log(isPalindrome(string1)); 
  console.log(isPalindrome(string2)); 
  console.log(isPalindrome(string3));
//***************************************** */
// Write a JavaScript function that generates all combinations of a string.

// CODE HERE
function substrings(string) {
    const result = [];
    
    function search_combination(start, current) {
      if (cur.length > 0) {
        result.push(current);
      }
      for (let i = start; i < string.length; i++) {
        search_combination(i + 1, current + string[i]);
      }
    }  
    search_combination(0, '');
    return result;
  }
  const string = 'big boy';
  const result = substrings(string);
  console.log(result);
  
//***************************************** */
// Write a JavaScript function that returns a string that has letters in alphabetical order.

// CODE HERE
function alphabet_order(string)
  {
return string.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

//***************************************** */
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// CODE HERE

//***************************************** */
// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// CODE HERE

//***************************************** */
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

// CODE HERE

//***************************************** */
// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// CODE HERE

//***************************************** */
// Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// CODE HERE

//***************************************** */
// Write a JavaScript function which returns the n rows by n columns identity matrix.

// CODE HERE

//***************************************** */
// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

// CODE HERE

//***************************************** */
// Write a JavaScript function to compute the factors of a positive integer.

// CODE HERE

//***************************************** */
// Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

// CODE HERE

//***************************************** */
// Write a JavaScript function to compute the value of bn where n is the exponent and b is the base. Accept b and n from the user and display the results.

// CODE HERE

//***************************************** */
// Write a JavaScript function to get the number of occurrences of each letter in a specified string.

// CODE HERE 

//***************************************** */
// Write a function for searching JavaScript arrays with binary searches.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

// CODE HERE

//***************************************** */
// Write a JavaScript function that returns array elements larger than a number.

// CODE HERE

//***************************************** */
// Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

// CODE HERE

//***************************************** */
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'w3resource.com', 'o'
// Expected output : 2

// CODE HERE

//***************************************** */
// Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'

// CODE HERE

//***************************************** */
// Write a JavaScript function to apply the Bubble Sort algorithm.

// CODE HERE

//***************************************** */
// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

// CODE HERE

//***************************************** */
// Write a JavaScript function to get the function name.

// CODE HERE 

//***************************************** */
// Write a JavaScript program to pass a 'JavaScript function' as a parameter.

// CODE HERE