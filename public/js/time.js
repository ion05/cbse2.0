const songDate = new Date();
const day = songDate.getDay();
switch(day){
    case 0:
        currentDay = 'Sunday';
        break;
    case 1:
        currentDay = 'Monday';
        break;
    case 2:
        currentDay = 'Tuesday';
        break;
    case 3:
        currentDay = 'Wednesday';
        break;
    case 4:
        currentDay = 'Thursday';
        break;
    case 5:
        currentDay = 'Friday';
        break;
    case 6:
        currentDay = 'Saturday';
        break;
}
const hours =   songDate.getHours();
const minutes = songDate.getMinutes();
const h = (songDate.getHours()<10?'0':'') + songDate.getHours();
const m = (songDate.getMinutes()<10?'0':'') + songDate.getMinutes();
const month = songDate.getMonth();
switch(month){
    case 0:
        currentMonth = 'January';
        break;
    case 1:
        currentMonth = 'Feburary';
        break;
    case 2:
        currentMonth = 'March';
        break;
    case 3:
        currentMonth = 'April';
        break;
    case 4:
        currentMonth = 'May';
        break;
    case 5:
        currentMonth = 'June';
        break;
    case 6:
        currentMonth = 'July';
        break;
    case 7:
        currentMonth = 'August';
        break;
    case 8:
        currentMonth = 'September';
        break;
    case 9:
        currentMonth = 'October';
        break;
    case 10:
        currentMonth = 'November';
        break;
    case 11:
        currentMonth = 'December';
        break;
}
switch(songDate.getDate()){
    case 1:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
        currentDate = ` ${songDate.getDate()}th`
        break;
    case 2:
    case 22:
        currentDate = ` ${songDate.getDate()}nd`
        break;
}
document.querySelector('.time-component').innerHTML = `
    <h3>${h}:${m}</h3>
    <h4>${currentDay} , ${currentMonth}</h4>
`;