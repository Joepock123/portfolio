# Joe Jackson :sunrise: 
A static portfolio website built using vanilla JS and hosted on Netlify.

# What did I learn?
Coding the typer function to create a typing effect on the hero was an interesting challenge.

I wanted to create a function which would take an array as an arguement and append new elements for each element of the array to the DOM, not just inserting text content into pre-existing DOM nodes.

## Challenges
- Getting the elements to render one after eachother
- Getting the letter in each element to render one after eachother
- Styling the elements to look like JSON data

## DOM Rendering Recursive functions
My thinking was to use a setTimeout to delay the rendering of each element or letter. 

First I tried to do it with a for loop. The problem was that at runtime the loop fired off the iterations almost immediately, the setTimeouts were sent to the callstack and to the human eye each line appeared at the same time.

To fix this problem, I refactored the function include a function that would call itself recursively until all elements in the element (the letters) had been rendered to the DOM. Then the function would call itself until the last element.

## Styling - DOM Manipulation
I dynamically created and added a class name for each element but then 'hard coded' the styling.

To improve on this in the future I'm thinking of creating some kind of JSON formatter where conditionals in the typer function would determine which classes would be added and subsequently what indenting or colours are applied.
