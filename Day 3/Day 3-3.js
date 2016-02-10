function processData(myArray) {
     var maxi = Math.max.apply(null, myArray);
    console.log(Math.max.apply(null, myArray.filter((x) => x != maxi)));    
}