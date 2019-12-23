
function validateInput(data) {
  let error = {};

  if (data === "error") {
    error.message = "whatever";
  }

  return {
    error,
    isValid: Object.keys(error).length === 0
  }
}