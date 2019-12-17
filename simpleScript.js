

function angleCalc() {
  const hour = document.getElementById("hours").value;
  const minutes = document.getElementById("minutes").value;
  const answer = document.getElementById("answer");

  const hourPercent = (hour % 12) / 12;
  const minutePercent = minutes / 60;  
  const oneHourDegrees = 360 / 24;
  
  const hourAngle = hourPercent * 360 + minutePercent * oneHourDegrees;
  const minuteAngle = minutePercent * 360;

  answer.innerHTML = Math.abs(minuteAngle - hourAngle);
  
  console.log(hourAngle);
  console.log(minuteAngle);
  console.log(Math.abs(minuteAngle - hourAngle));
}
