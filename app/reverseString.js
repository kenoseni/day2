exports.reverseString = function(word){
  var newString = "";
  for(var i = word.length - 1 ; i >= 0; i--){
    newString += word[i];
  }
  if(word ===''){
    return null;
  }else if(newString == word){
    return true;
  }else{
    return newString;
  }
 
}