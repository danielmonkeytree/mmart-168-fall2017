//------------------------------------------------------------------
// PART I
//------------------------------------------------------------------
//Create a function that appends an "li" element to an unordered list
// ("ul" element) in the DOM. This function should take a string as a
// parameter. In the body of the function, there should be code that
// appends an "li" element, with the string inside, to the un-ordered
// list ("ul" tag):

const addListItemToUnorderedHTMLList = (message) => {
    //add "li" tag to "ul" tag
    document.getElementById('output').innerHTML += "<li>" + message + "</li>"

    //step 1: get the element in the HTML file:
    const ul = document.getElementById('output')

    //step 2: creat a brand li element:
    const li = document.createElement("li")

    //step 3: create a text node with the message inside
    const textNode = document.createTextNode(message)

    //step 4: append the text node to the li element
    li.appendChild(textNode)

    //step 5: append the li element to the ul element
    ul.appendChild(li)


}


//addListItemToUnorderedHTMLList('steve')
//addListItemToUnorderedHTMLList('Alex')
//addListItemToUnorderedHTMLList('Karin')



//------------------------------------------------------------------
// PART II
//------------------------------------------------------------------
// Using the strategy of your choice, write a loop over the numbers
// 1 - 100 that satisfies the following conditions:
//
// 1. If the number is divisible by 3, append "Fizz" to the unordered list
// 2. If the number is divisible by 5, append "Buzz" to the unordered list
// 3. If the number is divisible by 3 AND 5, append "FizzBuzz" to the unordered list.
// 4. Bonus points: Include both the number *and* the word you've appended to the list


for (let i=1; i<=100; i++) {
  //console.log(i)
  //addListItemToUnorderedHTMLList(i)

  if  (i % 3 === 0 && i % 5 === 0) {
      addListItemToUnorderedHTMLList("FizzBuzz")
  }   else if (i % 3 === 0) {
      addListItemToUnorderedHTMLList("Fizz")
  }   else if (i % 5 === 0) {
      addListItemToUnorderedHTMLList("Buzz")
  }   else {
        addListItemToUnorderedHTMLList(i)
      }
}
