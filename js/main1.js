const sheets = new Sheets({
    key: '1Gd_Badxt9Ej6EbA5oieQbeKkwR1Yy1VI0roC-iVSs_g'
  })


const doMatch = () => {
    sheets.getData(rows => {
        rows.forEach((row) => {
            console.log(row)
            const li = document.createElement('li')
            li.innerHTML = row.user + ': ' + row.skills + ':::' + row.location + ':::'
            document.getElementById('results').appendChild(li)
        })
    })
}
    //filter function now needed to only return arrays that include the search 'term'
//
// const term = document.getElementById('term').value
//
//
//     const userMatch= (term) => {
//         /*
//         If the string contains search term, it should return the string.
//         If it doesn't contain search term, it should return nothing
//         */
//         if (doMatch.indexOf('term') >= 0) {
//             return term
//         } else {
//             console.log ()
//         }
//     }
// }

//
//
// const getData = () => {
//
//     const term = document.getElementById('term').value
//     const sheets = new Sheets({
//         key: '1Gd_Badxt9Ej6EbA5oieQbeKkwR1Yy1VI0roC-iVSs_g'
//       })
//     fetch(sheets)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(json) {
//             let div
//             let textNode
//
//             // output statuses:
//             console.log(json.statuses)
//
//             // clear out existing tweets:
//             clearData()
//
//             // create new array with only statuses w/search term:
//             usersWithTerm = json.statuses.filter(function (status) {
//                 return status.text.indexOf('term') >= 0
//             })
//
//             // loop through new array (instead of looping through all statuses)
//             usersWithTerm.forEach((status) => {
//                 div = document.createElement('div')
//                 div.className = 'results'
//                 textNode = document.createTextNode(status.text)
//                 div.appendChild(textNode)
//                 document.getElementById('results').appendChild(div)
//             })
//
//         })
// }
