// Oh I bet you think you're soooooooooooooooooooo smart
// Have fun decyphering this on >:)

let correctUsername = ["MorganFlinn", "CalebCorpuz", "OliMcDonald", "JoseHijoDelCaballo", "BriannaRodgers", "MeganFrisbee", "DouglasBachman", "JosephClemens", "ChristineAmaral", "ElviaEberly", "LewisCrumb", "ElliottPinette"];
let correctPassword = ["ccf00dc0urt", "m0rg4nf00dc0urt", "dunk1nd0nut5", "ha1a15hack", "dakach1ck3n", "5t4rbuck5", "ch1cknb4p", "onth3g04t", "5m00thi3lab"];

function getCyphered(a, b, c) {
  let retVal = 0;
  let switchVal = c%5;
  switch(switchVal){
    case(0):
      retVal = (a%b) * (b-5);
      break;
    case(1):
      retVal = (a%b) * (b-2);
      break;
    case(2):
      retVal = (a%b) * (a-2);
      break;
    case(3):
      retVal = (a%b) * (a-3);
      break;
    case(4):
      retVal = (a%b) * (4-a);
      break;
  }
  

  return retVal;
}



const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));

// Show modal on page load
window.onload = function() {
  loginModal.show();
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user == correctUsername[getCyphered(8, 7, 28)] && pass == correctPassword[getCyphered(30, 4, 11)]) {
    // Show main content
    document.getElementById('main').style.display = 'block';

    // Hide modal
    loginModal.hide();
  } else {
    console.log(correctUsername[getCyphered(7, 7, 16)]);
    console.log(correctPassword[getCyphered(30, 4, 11)]);
    document.getElementById('errorMsg').style.display = 'block';
  }
});


