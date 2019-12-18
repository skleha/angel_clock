
const hourHand = [{xPoint: 0, yPoint: 0}]

function angleCalc() {
  const time = document.getElementById("hours").value;
  const hourAngle = calcHourAngle(time);
  const minuteAngle = calcMinuteAngle(time);

  const answer = Math.abs(hourAngle - minuteAngle).toFixed(1);
  const answerOneDiv = document.getElementById("answerOne");
  answerOneDiv.innerHTML = answer;
  
  const answerTwoDiv = document.getElementById("answerTwo");
  answerTwoDiv.innerHTML = (360 - answer).toFixed(1);

}

function calcHourAngle(time) {
  const timeArray = time.split(":");
  const hour = timeArray[0];
  const minutes = timeArray[1];
  const hourPercent = (hour % 12) / 12;
  const minutePercent = minutes / 60;
  const oneHourDegrees = 360 / 12;
  const angle = hourPercent * 360 + minutePercent * oneHourDegrees;
  return angle;
}

function calcMinuteAngle(time) {
  const timeArray = time.split(":");
  const minutes = timeArray[1];
  const minutePercent = minutes / 60;
  const angle = minutePercent * 360;
  return angle;
}

function handPoint(angle, length) {
  const hourHandLength = length;
  const radians = angle * (Math.PI / 180)
  const x = parseFloat((hourHandLength * Math.sin(radians)).toFixed(1));
  const y = parseFloat((hourHandLength * Math.cos(radians)).toFixed(1));
  return {xPoint: x, yPoint: y};
}

