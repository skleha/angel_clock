
function validateInput(data) {
  let message = null;

  // doesn't have colon
  // has more than one colon
  // doesn't have numbers


  if (data === "") {
    message = "Input was blank.  Enter time in text input";
  }

  if (!data.includes(":")) {
    message = "Improper time format.  Please enter time using the following format, \"5:30\".";
  }

  if (data.split(":").length > 2) {
    message = "Improper time format.  Please enter time using the following format, \"5:30\".";
  }


  return {
    message,
    notValid: message !== null
  }
}