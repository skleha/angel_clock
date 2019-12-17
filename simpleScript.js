


window.addEventListener('DOMContentLoaded', () => {

  


})

function angleCalc() {
  const hour = document.getElementById("hours").value;
  const minutes = document.getElementById("minutes").value;
  const oneHourDegrees = 360 / 24;
  
  console.log((hour % 12) / 12 * 360);
  console.log(minutes / 60 * 360);
}
