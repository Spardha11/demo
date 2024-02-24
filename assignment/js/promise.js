let wordApiURL = '';

function getRandomWord() {
  wordApiURL = getWordApi();
  fetch(wordApiURL)
  .then(wordResponse => wordResponse.json())
  .then((wordData) => {
    updateDOM(wordData.word)
    return fetch(getDictionaryApiUrl()+'/'+wordData.word);
  })
  .then(dictionaryResponse => dictionaryResponse.json())
  .then(dictionaryData => {
    const dictionaryInfo = dictionaryData[0];
    const meaningLength = dictionaryInfo.meanings.length;
    let meaningsToPrint = [];
    let meaning = {};
    dictionaryInfo.meanings.map(item => {
      meaning[item.partOfSpeech] = item.partOfSpeech;
      meaning['definitions'] = item.definitions;
      meaningsToPrint.push(meaning);
    });
    updateDictionaryDetails(dictionaryInfo.word, meaningsToPrint);
  })
  .catch(error => console.log(error));
}

function updateDOM(word) {
  var para = document.getElementById('word');
  para.innerHTML= word;
}


function updateDictionaryDetails(word,meanings) {

  // Write your code here
  
}