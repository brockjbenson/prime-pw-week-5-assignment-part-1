console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  'firstName': 'Brock',
  'lastName': 'Benson',
  'hasSiblings': false,
  'shoeCount': 4,
  'favThreeFoods': ['Pizza', 'Tacos','Mac n Cheese']
  // TODO - add properties here
  // Added a new object 'me' with properties
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
const fullName = me.firstName + ' ' + me.lastName;
// Creating fullName
console.log(fullName);
// Logging new variable fullName



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(me.favThreeFoods[0]);
// Logging the first item in favThreeFoods
console.log(me.favThreeFoods[2]);
// Logging the last item in favThreeFoods



/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('Current shoe count is:', me.shoeCount);
// Logging current shoe count
me.shoeCount += 1;
// Changing shoe count
console.log('New shoe count is:', me.shoeCount);
//New shoe count logged


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'Blue';
// Addind object favoriteColor with a property of 'Blue'
console.log(me.favoriteColor);
// Logging new favorite color
console.log(me);
// Logging updated object
