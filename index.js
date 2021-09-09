function scuberGreetingForFeet(someValue){
  // Write your code here!
  let result
  if (someValue <= 400) {
    result = 'This one is on me!'
  }
  else if (someValue >= 2000 &&  someValue < 2500) {
    result = 'I will gladly take your thirty bucks.'
  }
  else if (someValue >= 2500) {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(someCity){
  // Write your code here!
  return someCity === 'NYC'?`Ok, sounds good.`:`No go.`
}

function switchOnCharmFromTip(someTip){
  // Write your code here!
  let charm;

  switch (someTip) {
    case 'generous':
      charm = "Thank you so much.";
      break;
    case 'not as generous':
      charm = 'Thank you.';
      break;
    default:
      charm = 'Bye.';
  }
return charm
}