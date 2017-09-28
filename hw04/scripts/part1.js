//Daniel Lippincott

//part 1: THe setLanguage function determines which language will be used depending on the code which is found  in the html file.

let language
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'qu') {
        language = 'Quechua'
    } else if (code === 'is') {
        language = 'Icelandic'
    } else {
        language = 'Bosnian'
    }
    document.getElementById('language').innerHTML = language
}
