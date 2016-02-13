function processData(input) {
    // Split the function at the new line.
    var rows = input.split('\n');
    var cash = rows[0].split(' ').map(Number)[1];
    var arr = rows[1].split(' ').map(Number);
    arr = arr.sort(function(a, b){return a-b}); 
    var numofToys = 0;
    while(cash>=0) {
        cash -= arr[numofToys];
        numofToys++;
    }
    
    // must denote -1 to compesate for the extra loop pass
    console.log(numofToys-1);
} 