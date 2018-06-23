// Write your code in this file!
scuberGreetingForFeet = (num) => {
  if (num < 400) {
    return 'This one is on me!'
  } 
  else if (num > 2000 && num < 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}
ternaryCheckCity = (city) => {
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

switchOnCharmFromTip = (tip) => {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
      break;

    case 'not as generous':
      return 'Thank you.'
      break;
  
    default:
      return 'Bye.'
      break;
  }
}