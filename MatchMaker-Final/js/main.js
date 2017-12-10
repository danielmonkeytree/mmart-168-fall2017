
const sampleData = [null, 'Justin Bieber', null, 'Singer', 'looking good', 'Los Angeles', 'Backstreet Boys', 'Pop', 'Drummer']

//now manipulate the DOM to show the array above//



// const addListItemToUnorderedHTMLList = (sampleData) => {
//     //add 'li' tag to 'ul' tag
//     document.getElementById('results').innerHTML += '<li>' + sampleData + '</li>'
//
//     //step 1: get the element in the HTML file:
//     const ul = document.getElementById('results')
//
//     //step 2: creat a brand li element:
//     const li = document.createElement('li')
//
//     //step 3: create a text node with the message inside
//     const textNode = document.createTextNode(sampleData[1])
//
//     //step 4: append the text node to the li element
//     li.appendChild(textNode)
//
//     //step 5: append the li element to the ul element
//     ul.appendChild(li)
// }

const div = document.createElement('div')

    sampleData.forEach((info) => {
      document.createElement('div')
      div.innerHTML = sampleData
      document.getElementById('results').appendChild(div)
      console.log(info)

  })



// and then an array of arrays //



//eventually we will want to filter the data to give results wanted//
//use if/else statements to do the filtering?
