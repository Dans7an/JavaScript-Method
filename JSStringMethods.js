# JS String Methods

## charAt
The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
#### Examples
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"
console.log(`The character at index ${index} is ${sentence.charAt(0)}`);
// expected output: "The character at index 0 is T"
console.log(`The character at index ${index} is ${sentence.charAt(8)}`);
// expected output: "The character at index 8 is k"

#### Time Complexity
constant- 0(1) 



## charCodeAt
The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
#### Examples
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"
console.log(`The character at index ${0} is ${sentence.charAt(0)}`);
// expected output: "The character code 84 is equal to T"
console.log(`The character at index ${8} is ${sentence.charAt(8)}`);
// expected output: "The character code 107 is equal to k"

#### Time Complexity
linear- 0(n) 

## concat
The concat() method concatenates the string arguments to the calling string and returns a new string.
#### Examples
const str1 = 'Hello';
const str2 = 'World';
const str3 = 'Bye';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"

console.log(str3.concat(', ', str2));
// expected output: "World, Hello"

#### Time Complexity
linear- 0(n) 

## includes
The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
#### Examples
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
console.log(sentence.includes('word'));
// expected output: false
console.log(sentence.includes('jumps'));
// expected output: true

#### Time Complexity
linear- 0(n) 

## indexOf
The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
#### Examples
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"

console.log(`The index of the 2nd "${The}`);
// expected output: "The index of the "The" is 1"

#### Time Complexity
linear- 0(n) 

## match
The match() method retrieves the result of matching a string against a regular expression.
#### Examples
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]
const lost = paragraph.match(/ju/g);
// expected output: Array ["jump"]
const now = paragraph.match(/he/g);
// expected output: Array ["he", "he"]

#### Time Complexity
linear- 0(n) 

## repeat
The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
#### Examples
const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "

#### Time Complexity
linear- 0(n) 

## replace
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
#### Examples
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

#### Time Complexity
linear- 0(n) 

## search
The search() method executes a search for a match between a regular expression and this String object.
#### Examples
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."

#### Time Complexity
linear- 0(n) 

## slice
The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
#### Examples
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"

#### Time Complexity
linear- 0(n) 

## split
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  
#### Examples
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

#### Time Complexity
linear- 0(n) 

## substr
The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
#### Examples
const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"


#### Time Complexity
linear- 0(n) 

## toLowerCase
The toLowerCase() method returns the calling string value converted to lower case.
#### Examples
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."

console.log('SENTENCE'.toLowerCase());
// expected output: "sentence"

console.log('nEW Guy'.toLowerCase());
// expected output: "new guy"

#### Time Complexity
linear- 0(n) 

## toUpperCase
Return a single value after applying the reduction function for each element.
#### Examples
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
console.log('sentence'.toUpperCase());
// expected output: "SENTENCE"
console.log(nEW Guy.toUpperCase());
// expected output: "NEW GUY"

#### Time Complexity
linear- 0(n) 

## trim
The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
#### Examples
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";

console.log('   greeting'.trim());
// expected output: "greeting";

#### Time Complexity
linear- 0(n) 
