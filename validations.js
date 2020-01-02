
function hasResponse(data) {
  return (data !== "") ? true : false
}

function hasOneColon(data)  {
  return (data.split(":").length === 2) ? true : false
}

function minutesAreTwoDigits(data) {
  const minutes = data.split(":")[1];
  return minutes.length === 2;
}

function hourWithinBounds(data) {
  const hour = parseInt(data.split(":")[0])
  return (hour >= 0 && hour < 24) ? true : false
}

function minutesWithinBounds(data) {
  const minutes = parseInt(data.split(":")[1])
  return (minutes >= 0 && minutes <= 59) ? true : false
}

function validateInput(data) {
  const errors = {
    message: "Time must be entered using the following format, \"hh:mm\".\nHours are between 1 and 12; minutes are two digit and between 00 and 59.",
    notValid: false
  }
  
  if (hasResponse(data) &&
      hasOneColon(data) &&
      hourWithinBounds(data) && 
      minutesWithinBounds(data) &&
      minutesAreTwoDigits(data)) {

    } else {
      errors.notValid = true;
    }

  return errors;
}