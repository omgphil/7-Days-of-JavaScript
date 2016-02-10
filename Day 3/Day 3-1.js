function displayInformation() {
     // var library is defined, use it to print the information
    for (var x = 0; x < library.length; x++){
      if (library[x].readingStatus){
            console.log("Already read '"+library[x].title+"' by "+library[x].author+".");
        } else {
            console.log("You still need to read '"+library[x].title+"' by "+library[x].author+".");
        }
    }
} 