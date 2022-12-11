// import moment here; use this package in each function
const moment = require('moment');


const today = () => {
  // write code for dates.today
  let m = moment().format('dddd');
  console.log(m)
  return m
}

const calendar = () => {
  // write code for dates.calendar
  let m = moment().format("MMM Do YYYY");
  console.log(m)
  return m
}

const currentTime = () => {
  // write code for dates.currentTime
  let m = moment().format('hh:mm:ss a');
  console.log(m)
  return m
}

module.exports = {
  today,
  calendar,
  currentTime
}