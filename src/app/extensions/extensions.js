Date.prototype.addDaystoCurrentDay = function (days) {
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};
Date.prototype.format = function (fecha) {
    let fec = new Date(this.valueOf());
    var day = fec.getDate();
    var mounth = fec.getMonth();
    var year = fec.getFullYear();
    return `${day}/${++mounth}/${year}`;
};
window.onload = function () {
    var currentDay = new Date();
    console.log(currentDay);
    console.log(currentDay.addDaystoCurrentDay(5), currentDay.format(currentDay));
};
