
const hourHand = [{ xPoint: 0, yPoint: 0 }, { xPoint: 0.2, yPoint: 4 }];
const minuteHand = [{ xPoint: 0, yPoint: 0 }, { xPoint: 3.5, yPoint: 6.1 }];

function angleCalc() {
  const time = document.getElementById("hours").value;
  const errors = validateInput(time);
  

  if (errors.notValid) {
    alert(errors.message);
    return;
  }

  const timeArray = time.split(":");
  const hourAngle = calcHourAngle(timeArray);
  const minuteAngle = calcMinuteAngle(timeArray);
  
  hourHand[1] = handPoint(hourAngle, 4);
  minuteHand[1] = handPoint(minuteAngle, 7);
  console.log(minuteHand);

  const answerOne = Math.abs(hourAngle - minuteAngle).toFixed(1);
  const answerTwo = (360 - answerOne).toFixed(1);

  const answerOneDiv = document.getElementById("answerOne");
  answerOneDiv.innerHTML = `${Math.max(answerOne, answerTwo)} degrees`;
  
  const answerTwoDiv = document.getElementById("answerTwo");
  answerTwoDiv.innerHTML = `${Math.min(answerOne, answerTwo)} degrees`;

}

function calcHourAngle(timeArray) {
  const hour = timeArray[0];
  const minutes = timeArray[1];
  const hourPercent = (hour % 12) / 12;
  const minutePercent = minutes / 60;
  const oneHourDegrees = 360 / 12;
  const angle = hourPercent * 360 + minutePercent * oneHourDegrees;
  return angle;
}

function calcMinuteAngle(timeArray) {
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
