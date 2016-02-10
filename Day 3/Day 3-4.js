function findDay(myDate) {
    if(myDate != -1){
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
         var d = new Date(myDate);
        console.log(days[d.getDay()]);
    }
} 