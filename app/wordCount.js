exports.words= function(str){
  
  var myWords = str.split(/\s+/);
  var wordCount = {};
  for(var i = 0; i<myWords.length; i++){
    var eachWord = myWords[i];
    console.log(eachWord)
    if(wordCount[eachWord] === undefined){
      wordCount[eachWord] = 1;
    }else if(typeof wordCount[eachWord] !== 'number' ){
      wordCount[eachWord] = 1;
    }else{
      wordCount[eachWord]+=1;
    }
    
  }
  return wordCount;
}