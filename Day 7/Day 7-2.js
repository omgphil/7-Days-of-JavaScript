function getWritableFormat(letter, index,formatLength){
	const word = letter.repeat(2 *  index + 1);
	let left = "".padStart((formatLength - word.length) / 2);
	let right = "".padEnd((formatLength - word.length) / 2);
	return `${left}${word}${right}`; 
}

function processData(){
   for(let i = 0 ; i< 9 ; i++){
     if(i === 0) {
	   	console.log(getWritableFormat("*",0,17));
     } 
      console.log(getWritableFormat("0",i,17))
}
}
