//------------------------------------------------------------------
// PART I: Using a while loop, print the message provided 100 times
//------------------------------------------------------------------

const text = 'Donald, eres un pendejo!'


// Creates a list element and appends it to the unordered list in part1

//Note; Ricky created this function as a a concvenient way to add list items to the DOM

//The function definition
const appendListElement = (text) => {
  //creates an empty "list item" container
  const li = document.createElement('li')
  //creates a textNode in the doc that conatins the string stored in the 'text paramenter (which is a variable)'
  const textNode = document.createTextNode(text)
  //attahces the textNode to the list item element:
  li.appendChild(textNode)
  //finds the element that has id='part1' and appends the list items

  document.querySelector('#part1').appendChild(li)
}

let counter = 0
while (counter<100) {
  console.log(text)
  appendListElement('Donald, eres un Pendejo!')
  counter++
}
//call the function to activate!
appendListElement('Donald, eres un Pendejo!')


//------------------------------------------------------------------
// PART II: Using a for loop, write out each person’s avatar, name, and score, based on the people array
//------------------------------------------------------------------
//The data:
var people = [
    { name: 'Jasper', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 600 },

    { name: 'Jane', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 300 },

    { name: 'Maria', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 80 },

     { name: 'Wanda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 60 },

     { name: 'Malik', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 40 },

     { name: 'Brenda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 10}


]



// use a for loop to loop through each element
// of the people array and output this message
// to the screen (except show each person's info):
const printNames = (counter) => {
  // Message 1
  const img1 = document.createElement('img')
  img1.src = people[counter].pic
  img1.classList.add('avatar')

  const paragraph1 = document.createElement('p')
  const text1 = document.createTextNode('Welcome, ' + people[counter].name + '! Your score is: ' + people[counter].score)
  paragraph1.appendChild(text1)

  document.querySelector('#part2').appendChild(img1)
  document.querySelector('#part2').appendChild(paragraph1)

}

  // Arrays and Loops === Best Friends!!
for ( let i=0; i < people.length; i++) {
      printNames(i)
}
