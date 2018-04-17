interface Date {
    addDaystoCurrentDay(days: number):Date;
}

Date.prototype.addDaystoCurrentDay = function(days: number): Date{
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate()+days);
    return dat;
}

window.onload = function(){
    var currentDay = new Date();
    console.log(currentDay);
    console.log(currentDay.addDaystoCurrentDay(5));
}