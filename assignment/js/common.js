let wordApiConfiguration = {};
let dictionaryApiConfiguration = {};
// IIFE 
(function() {
    fetch('../config/word-config.json')
    .then(response => response.json())
    .then((result) => {
        wordApiConfiguration = result;
    });

    fetch('../config/dictionary-config.json')
    .then(response => response.json())
    .then((result) => {
        dictionaryApiConfiguration = result;
    })
})();

function getWordApi()
{
    const wordApiUrl = wordApiConfiguration.wordApiUrl;
    const wordApiOptions = getApiOptions(wordApiConfiguration);

    return wordApiUrl+wordApiOptions;
}

function getDictionaryApiUrl()
{
    return dictionaryApiConfiguration.dictionaryApi+dictionaryApiConfiguration.language;
}

function getApiOptions(word) {
    let apiOptions = `hasDictionaryDef=${word.hasDictionaryDef}`;
    apiOptions    += `&maxCorpusCount=${word.maxCorpusCount}`;
    apiOptions    += `&minDictionaryCount=${word.minDictionaryCount}`;
    apiOptions    += `&maxDictionaryCount=${word.maxDictionaryCount}`;
    apiOptions    += `&minLength=${word.minLength}`;
    apiOptions    += `&maxLength=${word.maxLength}`;
    apiOptions    += `&api_key=${word.wordApiKey}`;

    return apiOptions;
}