// Write a JavaScript function that reverses a number.
//Example x = 32243;
//Expected Output : 34223

// CODE HERE
function reverse_a_number(n) // creating the function and passing it the argument of 'n'
{
	n = n + "" // turning the n variable into a string
	return n.split("").reverse().join("") // this line breaks the code into each of its numbers then reverses it and puts it back together with .join.
}
console.log(Number(reverse_a_number(32243))) // logged to test the code.

//***************************************** */
// Write a JavaScript function that checks whether a passed string is a palindrome or not?

// CODE HERE
// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function isPalindrome(string) { // creating the function and passing it the argument of 'string'
    let length = string.length // creating a variable to track the length of a string 
    for (let i = 0; i < length / 2; i++) { // for loop to test if each opposite index is the same.
      if (string[i] !== string[length - 1 - i]) {// if index of i === length - 1 + i it returns true else it returns false
        return false
      }
    }
    return true
  }
  let string1 = 'madam' // creating variable to test the code above
  let string2 = 'nursesrun'
  let string3 = 'fox'
  console.log(isPalindrome(string1))
  console.log(isPalindrome(string2))
  console.log(isPalindrome(string3))
//***************************************** */
// Write a JavaScript function that generates all combinations of a string.

// CODE HERE
function substrings(string) { // created a function called substrings that takes a string argument
    let result = []// created a variable and set it equal to an empty string
    
    function search_combination(start, current) { // created a function call search_combination that takes two arguments, 'start' and 'current'
      if (current.length > 0) {// if statement checking if the current length is greater than 0 
        result.push(current)// if it is true it pushes the current into our result array.
      }
      for (let i = start; i < string.length; i++) {// created a for loop that starts at our start variable and continues till i is greater than the length of our initial string
        search_combination(i + 1, current + string[i])// recursively calls the search_combination function with updated start and current parameters
      }
    }  
    search_combination(0, '') // runs our function using starting parameters 
    return result; // returns our result variable
  }
  let string = 'ella' // test code and logs to see if it works
  let result = substrings(string)
  console.log(result)
  
//***************************************** */
// Write a JavaScript function that returns a string that has letters in alphabetical order.

// CODE HERE
function alphabet_order(string) // created a function named alphabet_order taking in a string argument
  {
return string.split('').sort().join('') // in the function we split the string apart, call the sort funtion to sort it, then put it back together with join
  }
console.log(alphabet_order("webmaster"))// logged to test function

//***************************************** */
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// CODE HERE
function capitalFirst(string){// create a function called capitalFirst 
    let words = string.split(' ')// splits the input string into an array of individual words using split method
    for(let i =0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)// uses charAt to get to first letter then uses toUpperCase to change it to upper case. slice is then used to get the rest of the word after the first letter and is added to first letter.
    }
    return words.join(' ')// capitalized words are joined back together into one string
}
let sentence = "the quick brown fox"
console.log(capitalFirst(sentence))// logged for testing
//***************************************** */
// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// CODE HERE
// function bigWord(string){
//     //am confused rn
// }
//***************************************** */
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

// CODE HERE
function vowels(string1){// create the function
    let vowelList = 'aeiouAEIOU'// provide a list of valid vowels
    let vcount =0 // create a count of the vowels
    for(let i = 0; i < string1.length; i++){// for loop runs through the vowel list to see if the index i is at is a vowel
        if(vowelList.indexOf(string1[i]) !== -1){
            vcount += 1 // if it is it adds one to the count
        }
    }
    return vcount // returns count
}
console.log(vowels("sometimes I walk to work, sometimes I skip there")) // logged to check
//***************************************** */
// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// CODE HERE
function isPrime(n){// function to test if a number(n) is a prime number
  if (n <= 1) { // if statement that checks if the number is 1 or less if so it is not prime
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {// for loop created to check to see if the number is divisible by anything other than itself if it is it returns false.
    if (n % i === 0) {
      return false;
    }
  }
  return true;// else return true
}
console.log(isPrime(7))// logged for testing
//***************************************** */
// Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// CODE HERE
function whatsTheType(n){// function to return type of a parameter
  return typeof(n)// using typeof to find the type of a parameter
}
console.log(whatsTheType(56))//logged for testing
//***************************************** */
// Write a JavaScript function which returns the n rows by n columns identity matrix.

// CODE HERE
function matrix(n) {// creating identity matrix function
for (i=0; i < n; i++){// for loop to loop through n to create the rows 
    for (j=0; j < n; j++){// for loop to loop through and create the columns
         if (i === j){// if the index of i and j match a 1 is placed in the matrix
          console.log(' 1 ')
         }else{// if the indexs do not match a 0 is placed in the matrix
           console.log(' 0 ')}
          }
       console.log('----------')// console.log to break up columns of the matrix
     }
 }
matrix(4);// logged for testing
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
function letterCount(x, l){

}
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