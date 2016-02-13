function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var x = 0;
        for(var k=0;k<=n;k++){
            if(k % 2 == 0){
                x = x+1;
            } else {
                x = x *2;
            }
        }        
        console.log(x);
    }
}
