// Write your code in this file!

function scuberGreetingForFeet(value){
if (value <=400){
  result ="This one is on me!"
}
  else if(value > 2000 && value <=2500){
  result = "I will gladly take your thirty bucks."
}
  else if (value >2500){
    result = "No can do."
  }
  return result;
}

function ternaryCheckCity(city){
  return (city == "NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much."
      case "not as generous":
      return "Thank you."
      break;
    default:
    return "Bye."

  }
}
