# Feedback for Objects Assignment

## Overall Performance
I notice that your submission shows 0/10, which means the functions are currently empty. This is completely normal for learning programming - everyone starts somewhere!

## What This Means
All the function bodies are currently empty, which means the tests can't run properly. This is actually a great starting point because you have the function structure set up correctly.

## Getting Started

### Understanding the Assignment
This assignment focuses on working with JavaScript objects. Objects are collections of properties (key-value pairs) that let you store and organize data.

### Tips for Each Function

#### 1. coolGreeting(person)
- This function should check if `person.isCool` is true or false
- Use an `if` statement to return different greeting messages
- Use template literals (backticks) to include the person's name
- Try: `person.name.toUpperCase()` to make names uppercase

#### 2. haveBirthday(person)
- This function should increase the person's age by 1
- Use the `+=` operator: `person.age += 1`
- This function doesn't need to return anything

#### 3. becomeSecretAgent(person, spyHandle)
- Delete the `name` property: `delete person.name`
- Add a new property: `person.spyHandle = spyHandle`

#### 4. carMaker(name, maker, year)
- Create a new object with the provided parameters
- Include a `needsOilChange` property set to `false`
- Return the object

#### 5. weAreNotFriends(person)
- Use `person.friends.pop()` to remove the last friend
- Return the value that `pop()` gives you

#### 6. listHobbies(person)
- Use a loop to go through `person.hobbies`
- Use `console.log()` to print each hobby
- Use template literals to format the output

#### 7. getNextOpponent(team)
- Check if `team.matches` has any items
- Return the `teamName` of the first match
- Return `null` if there are no matches

#### 8. listAllKeys(obj)
- Use `Object.keys(obj)` to get all the keys
- Return the result

#### 9. listAllValues(obj)
- Use `Object.values(obj)` to get all the values
- Return the result

#### 10. convertToMatrix(arr)
- This is the most complex one - start with the others first!
- Check if the array is empty, return empty array if so
- Get keys from the first object
- Create a new array with the keys as the first element
- Loop through each object and add its values

## Next Steps
1. Start with the simpler functions first (coolGreeting, haveBirthday, etc.)
2. Test each function as you complete it using `npm test`
3. Don't worry about getting everything perfect on the first try
4. Ask questions if you get stuck!

Remember: Programming is about problem-solving and iteration. Every programmer starts with empty functions - the important thing is to keep trying and learning!
