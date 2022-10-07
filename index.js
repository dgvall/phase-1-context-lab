/* Your Code Here */
function createEmployeeRecord(empArray) {
    return {
        firstName: empArray[0],
        familyName: empArray[1],
        title: empArray[2],
        payPerHour: empArray[3],
        timeInEvents:[],
        timeOutEvents:[],
    }
}

function createEmployeeRecords(recordsArray) {
   return recordsArray.map((empArray) => createEmployeeRecord(empArray))
}

function createTimeInEvent(dateStamp) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1], 10),
        date: dateStamp.split(" ")[0],
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1], 10),
        date: dateStamp.split(" ")[0],
    })
    return this
}

function hoursWorkedOnDate(date) {

   let timeIn = this.timeInEvents.find((day) => day.date === date)
   let timeOut = this.timeOutEvents.find((day) => day.date === date)

   return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    return (this.payPerHour * hours)
}

function findEmployeeByFirstName(recordsArray, firstName) {
    return recordsArray.find((employee) => employee.firstName === firstName)
}

function calculatePayroll (recordsArray) {
    return recordsArray.reduce((total, emp) => total + allWagesFor.call(emp), 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

