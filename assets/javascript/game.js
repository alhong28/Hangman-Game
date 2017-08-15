
var myDict = ["cowgirl", "cunnilingus","felatio", "missionary", "doggystyle",
    "menage a trois", "submissive", "dominant", "spanking", "deepthroat", 
    "cuckhold", "cuckqueen", "interracial", "vanilla sex", "reverse cowgirl",
    "vibrator", "anal beads", "ham sammich", "orgy", "swingers", "foot fetish",
    "creampie", "gangbang", "pornstar", "golden shower"];
var myWord = myDict[Math.floor(Math.random()*myDict.length)].split("");
console.log(myWord);
var myBlank = [];
for (var i = 0; i < myWord.length; i++) {
  myBlank[i] = "_";
}
console.log(myWord,myBlank);
var guessCount = 10;
var guessList = "";
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z"]
var myGuess = "";


document.onkeyup = function(e) {
  myGuess = e.key;
  if (myWord.indexOf(myGuess) !== -1 && guessList.indexOf(myGuess) == -1 && alphabet.indexOf(myGuess) !== -1) {
    while (myWord.indexOf(myGuess) !== -1) {
      myBlank[myWord.indexOf(myGuess)] = myGuess;
      guessList += (" " + myGuess);
      myWord[myWord.indexOf(myGuess)] = 0;
      console.log("in");
    }
    if (myBlank.indexOf("_") == -1) {
      document.getElementById("infoPanel").innerHTML = "<p>Yeah baby, good job, the fantasy was: </p>" + myBlank + "<p>Now on to the next naughty thought ;)</p>";
      myWord = myDict[Math.floor(Math.random()*myDict.length)].split("");
      console.log(myWord);
      myBlank = [];
      for (var i = 0; i < myWord.length; i++) {
        myBlank[i] = "_";
      }
      console.log(myWord,myBlank);
      guessCount = 10;
      guessList = "";
    }
    else {
      var infoPanel = 
        "<p>You guessed: " + myGuess + "</p>";
      document.getElementById("infoPanel").innerHTML = infoPanel;

      var numberOfGuesses =
        "<p>Guesses remaining: " + guessCount + "</p>";
      document.getElementById("numberOfGuesses").innerHTML = numberOfGuesses;

      var Word = 
        "<p>Current word: "
          for (i=0; i < myBlank.length; i++) {
          Word += myBlank[i];
        }
        Word += "</p>";
      document.getElementById("Word").innerHTML = Word;

      var lettersGuessed =
        "<p>Letters guessed:" + guessList + "</p>";
      document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    }
  } 
  else if (myWord.indexOf(myGuess) == -1 && guessList.indexOf(myGuess) == -1 && alphabet.indexOf(myGuess) !== -1) {
    guessCount -= 1;
    guessList += (" " + myGuess);
    console.log("out");
    if (guessCount == 0) {
      document.getElementById("infoPanel").innerHTML = "<p>Try again ;)</p>";
      myWord = myDict[Math.floor(Math.random()*myDict.length)].split("");
      console.log(myWord);
      myBlank = [];
      for (var i = 0; i < myWord.length; i++) {
        myBlank[i] = "_";
      }
      console.log(myWord,myBlank);
      guessCount = 10;
      guessList = "";
    }
    else {
      var infoPanel = 
          "<p>You guessed: " + myGuess + "</p>";
      document.getElementById("infoPanel").innerHTML = infoPanel;

      var numberOfGuesses =
        "<p>Guesses remaining: " + guessCount + "</p>";
      document.getElementById("numberOfGuesses").innerHTML = numberOfGuesses;

      var Word = 
        "<p>Current word: "
          for (i=0; i < myBlank.length; i++) {
          Word += myBlank[i];
        }
        Word += "</p>";
      document.getElementById("Word").innerHTML = Word;

      var lettersGuessed =
        "<p>Letters guessed:" + guessList + "</p>";
      document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    }
  }



}



	



	