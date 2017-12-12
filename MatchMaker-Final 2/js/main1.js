let searchTerm = null
const sheets = new Sheets({
    key: '1Gd_Badxt9Ej6EbA5oieQbeKkwR1Yy1VI0roC-iVSs_g'
  })

/* original database
Drunken Monkey: production, composition, remixing:::oakland, CA:::
Abba: harmonies:::sweden:::
Justin Bieber: looking good:::Los angeles:::
Bjork: performance art:::Iceland:::
Devo: Dance Beats:::Ohio:::
Robert Zimmerman: writing lyrics:::Minnesota:::
Jimi Hendrix: guitar shredding:::London:::
All Night Prescription: fusing genres:::portland:::
Godfrey Daniel: composing:::Oakland:::
*/

const skillsFilter = (row) => {
    return (row.skills.toLowerCase().search(searchTerm.toLowerCase()) !== -1)
}

const userFilter = (row) => {
    return (row.user.toLowerCase().search(searchTerm.toLowerCase()) !== -1)
}

const projectTypeFilter = (row) => {
    return (row.project_type.toLowerCase().search(searchTerm.toLowerCase()) !== -1)
}

const seekingFilter = (row) => {
    return (row.seeking.toLowerCase().search(searchTerm.toLowerCase()) !== -1)
}

const locationFilter = (row) => {
    return (row.location.toLowerCase().search(searchTerm.toLowerCase()) !== -1)
}

const anyFilter = (row) => {
    console.log(row)
    return skillsFilter(row) || userFilter(row) || seekingFilter(row) ||
        locationFilter(row) || projectTypeFilter(row)
}

const doMatch = () => {
    document.getElementById('results').innerHTML = ''
    sheets.getData(rows => {
        searchTerm = document.getElementById('term').value.toLowerCase()
        const matches = rows.filter(anyFilter)

        matches.forEach((row) => {
            console.log(row)
            const li = document.createElement('li')
            li.innerHTML = row.user + ': ' + row.skills + ':::' + row.location + ':::' +
                           row.project_type + ':::' + row.seeking

            document.getElementById('results').appendChild(li)
        })
    })
}


//
// const sheets = new Sheets({
//     key: '1Gd_Badxt9Ej6EbA5oieQbeKkwR1Yy1VI0roC-iVSs_g'
//   })
//
//
// const doMatch = () => {
//     sheets.getData(rows => {
//         rows.forEach((row) => {
//             console.log(row)
//             const li = document.createElement('li')
//             li.innerHTML = row.user + ': ' + row.skills + ':::' + row.location + ':::'
//             document.getElementById('results').appendChild(li)
//         })
//     })
// }
    //filter function now needed to only return arrays that include the search 'term'



// functions below relate to the filter exercises in homework 05...
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

//
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
