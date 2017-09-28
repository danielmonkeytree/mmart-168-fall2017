//Daniel Lippincott


let language = 'English'
let languageCode = 'en'
let jsonData


const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ru') {
        language = 'Russian'
    } else if (code === 'es') {
        language = 'Spanish'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language

    //clear form:
    getData()
}

const clearData = () => {
    const element = document.getElementById("results")
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

//Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
const getData = () => {

    const term = document.getElementById('term').value
    const baseURL = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    twitterURL = baseURL + '&lang=' + languageCode
    fetch(twitterURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            let div
            let textNode
            let status

            // output statuses:
            console.log(json.statuses)

            // clear out existing tweets:
            clearData()
/*
            // output the text of the first tweet:
            status = json.statuses[0]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // output the text of the second tweet:
            status = json.statuses[1]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // 1. Describe what you think this code is doing. RESPONSE: This code is searching for the first two instances of the search term apppearing in the status (text) field of the tweet. The search term may appear in any language that has that term in its vocabulary.

            // 2. output the text of the third tweet: RT @tbrown_19: My man Zack really made my day!! Really enjoyed the cookies!! Made me feel a lot better 😌 https://t.co/8mR5xtmlea

            status = json.statuses[2]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // 3. output the text of the fourth tweet: Nothing makes me more despondent than seeing "sugar free" sugar cookies at the grocery store. It's like, what are you?! ...Fucking Obama.


            status = json.statuses[3]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // 4. output the text of the fifth tweet: RT @pentagontexts: changgu: WHO ATE ALL THE COOKIES DO U WANNA FUCKIN GO yanan: it was me changgu: ...ON A DATE


            status = json.statuses[4]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)
*/
            // 5. comment the code above, starting from after the clearData,
            //    and ending right before this comment. Then, un-comment the
            //    code below: RESPONSE: I believe the forEach code is eliminating the specificity of the earlier code examples that asks for certain results within the array. In this case all instances are listed based on the search term used.

            json.statuses.forEach(function (status) {
                div = document.createElement("div")
                div.className = "tweet"
                textNode = document.createTextNode(status.text)
                div.appendChild(textNode)
                document.getElementById("results").appendChild(div)
            })

        })
};
