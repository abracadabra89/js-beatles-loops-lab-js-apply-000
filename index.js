// add solution here
function theBeatlesPlay(musicians, instruments){
  let array = [];
  for(let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
   return array;
  }
  
function johnLennonFacts(array){
 let i = 0;
 while (i < array.length) {
  array[i] = array[i] + "!!!";
  i++;
}
  return array;
}

function iLoveTheBeatles(number){
  var arr = [];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return arr;
}



