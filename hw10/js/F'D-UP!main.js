const apiKey = 'MW9S-E7SL-26DU-VV8V'

const makeStationList = () => {
  //url that asks the question you want to ask. in this case, give me a list of all of the BART stations://
    console.log("it's running")
    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey + '&cmd=stns&json=y'

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
          // Do SOMETHING COOL WITH YOUR DATA
            json = json.root


            //console.log(json.stations.station)
            //console:log(json)
            //Loop options for part 2- 'for Loop', 'while loop', 'forEach Loop'

            /*
            for loop example:
            const stations = json.stations.station
            for(let i=0; i<stations.length; i++) {
              console.log(stations[i].name)
            }
            */
            /*
            forEach loop example:
            stations.forEach((station) => {
              console.log(stations[i].name)
          })
          */

            json.stations.station.forEach((station) => {
            console.log(station.name)
            console.log(station)

            //1 create the element you want to add to the DOM.
            const option = document.createElement("option")

            //2 assign data to some part of the element
            option.innerHTML=station.name
            option.value=station.abbr

            //3. append the newly created element to the DOM somewhere:
            document.getElementById('station_list').appendChild(option)

            })

            // PART III.A.: Use a loop to populate the select menu with *ALL*
            // of the stations that are returned from the BART data feed:
            //const option1 = document.createElement("option")
            //option1.value = 'DBRK'
            //option1.innerHTML = 'Downtown Berkeley'
          //  document.getElementById('station_list').appendChild(option1)
        })

        .catch((err) => {
            console.log(err)
        })
}


const getArrivalTimes = () => {
    //go out and find the element with the ID stationList (which is a select element) and store it in a variable called stationList.
    const stationList = document.getElementById('station_list')
    // PART III.B.1: The bartStationCode should read from the list and query
    // for the corresponding station
    const bartStationCode = stationList.value
    console.log('Selected Station Code:', bartStationCode)

    let url = 'https://api.bart.gov/api/etd.aspx?key=' + apiKey + '&cmd=etd' +
                '&orig=' + bartStationCode + '&json=y'

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root
            console.log('You Have Selected ' + json.station[0].name)


            //clear: aka refresh the screen with each user search

            document.getElementById('results').innerHTML = ''

            //add 'header' (a div) that shows the selected station name

            const div = document.createElement('div')
            div.innerHTML = 'You have selected: ' + json.station[0].name
            document.getElementById('results').appendChild(div)


            //3. log all of  train lines:
              json.station[0].etd.forEach((line) => {
                console.log(line)

              //4. print all the train lines in the DOM
                const trainLine = document.createElement('div')
                trainLine.innerHTML = line.destination

                trainLine.innerHTML += ': Platform #' + line.estimate[0].platform

                trainLine.innerHTML += ' ( ' + line.estimate[0].direction + ')'
                //now append to the DOM
                document.getElementById('results').appendChild(trainLine)

                // now add the color of the train:
                const square = document.createElement('span')
                square.style.background = line.estimate[0].hexcolor
                square.classList.add('train-square')
                document.getElementById('results').appendChild(square)

                //4. log all train line estimates:
                const departureTimes = []
                line.estimate.forEach((estimate) => {
                    departureTimes.push(estimate)
                    console.log('Estimate: ', estimate)


                    //encapsulate each time estimate in a span tag
                    const departureTime = document.createElement('span')
                    departureTime.innerHTML = estimate.minutes
                    document.getElementById('results').appendChild(departureTime)
                })
            })
    })
}

makeStationList()
