// Write your code in this file!
function scuberGreetingForFeet(miles) {

  let message;
  if (miles < 401) {
    message = "This one is on me!";
  }
  else if (miles > 2000 && miles < 2500) {
    message = "I will gladly take your thirty bucks.";
  }
  else if (miles > 2500) {
    message = "No can do.";
  }
  return message;
}

function ternaryCheckCity(city) {
  message = (city === "NYC" ?  "Ok, sounds good." : "No go.");
  return message;
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case "generous":
      message = "Thank you so much."
    break;
    case "not as generous":
      message = "Thank you."
    break;
    default:
      message = "Bye."
    break;
  }
  return message;
}
