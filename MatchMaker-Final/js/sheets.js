var Sheets = function (opts) {
    const key = opts.key
    const query = opts.query
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://spreadsheets.google.com/tq?callback=test&key=' + key
    let url = proxyUrl + targetUrl
    if (query) {
        url += '&tq=' + query
    }
    //alert(url)


    this.getData = (callback) => {
        fetch(url)
          .then(blob => blob.text())
          .then(response => {
              response = convertToJSON(response)
              callback(response)
              //console.log(response)
          })
    }

    const convertToJSON = (response) => {
        // get rid of prefix: google.visualization.Query.setResponse(
        response = response.split('google.visualization.Query.setResponse(')[1]
        // get rid of trailing );
        response = response.substring(0, response.length - 2)
        response = JSON.parse(response)
        return simplifyData(response)
    }

    const simplifyData = jsonData => {
        console.log('table is:', jsonData.table)
        const data = []
        const columns = jsonData.table.rows[1]
        const records = jsonData.table.rows

        // //add data rows:
        // records.forEach(record => {
        //     const row = {}
        //     const cells = record.c
        //
        //     for (let i = 0; i < keys.length; i++) {
        //         const key = keys[i]
        //         row[keys[i]] = cells[i] ? cells[i].v : ''
        //     }
        //     data.push(row)
        // })
        return jsonData.table.rows[3].c
    }
}
