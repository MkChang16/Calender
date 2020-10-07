const currentDay = document.getElementById('dateTime')
const momentDateTime = moment().format('LLLL');

currentDay.innerText = "JSON.stringify(momentDateTime)"
console.log(moment().format('LLLL'))
