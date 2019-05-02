function processData(input) {
    // Split the function at the new line.
    const rows = input.split('\n');
    let cash = rows[0].split(' ').map(Number)[1];
    const arr = rows[1].split(' ').map(Number).sort((a,b) => a - b);
    
    var numofToys = 0;
    for(price of arr){
        cash -= price;
        if(cash < 0 ){
            break;
        }
        numofToys++;
    }   
    console.log(numofToys);
} 
