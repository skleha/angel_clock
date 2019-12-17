
function angleCalc() {
  const time = document.getElementById("hours").value;
  const timeArray = time.split(":");
  const hour = timeArray[0];
  const minutes = timeArray[1];

  const hourPercent = (hour % 12) / 12;
  const minutePercent = minutes / 60;  
  const oneHourDegrees = 360 / 24;
  
  const hourAngle = hourPercent * 360 + minutePercent * oneHourDegrees;
  const minuteAngle = minutePercent * 360;

  const answer = Math.abs(hourAngle - minuteAngle).toFixed(1);
  const answerOneDiv = document.getElementById("answerOne");
  answerOneDiv.innerHTML = answer;
  
  const answerTwoDiv = document.getElementById("answerTwo");
  answerTwoDiv.innerHTML = (360 - answer).toFixed(1);

}
