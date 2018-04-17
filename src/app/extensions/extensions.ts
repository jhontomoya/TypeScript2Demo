interface Date {
    addDaystoCurrentDay(days: number):Date;
    format(fecha: Date):String;
}

Date.prototype.addDaystoCurrentDay = function(days: number): Date{
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate()+days);
    return dat;
}

Date.prototype.format = function(fecha: Date): String{
    let fec = new Date(this.valueOf());
    var day = fec.getDate();
    var mounth = fec.getMonth();
    var year = fec.getFullYear();
    return `${day}/${++mounth}/${year}`;   
 //return fec.toLocaleDateString();// Solucion facil
}

window.onload = function(){
    var currentDay = new Date();
    console.log(currentDay);
    console.log(currentDay.addDaystoCurrentDay(5),
                currentDay.format(currentDay));
}
