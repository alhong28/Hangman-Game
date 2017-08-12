window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var guesses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showWins = document.getElementById("Wins");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");


  // create alphabet board
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

	  // Create guesses
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

	//lives


   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
        Wins++;
      }
    }
  }
	//create an array with random words that that will be populated for the game along with all the necessary variables!-->
	
	
	//need to randomly choose a word in the array and have it for guesses!-->

  play = function () {
    words = ["cowgirl", "cunnilingus","felatio", "missionary", "doggystyle",
    "menage a trois", "submissive", "dominant", "spanking", "deepthroat", 
    "cuckhold", "cuckqueen", "interracial", "vanilla sex", "reverse cowgirl",
    "vibrator", "anal beads", "ham sammich", "orgy", "swingers", "foot fetish",
    "creampie", "gangbang", "pornstar", "golden shower"];

      
    	word = words[Math.floor(Math.random() * words.length)];
   		word = word.replace(/\s/g, "-");
    
    		console.log(word);
    		buttons();

    	guesses = [ ];
    	lives = 10;
    	counter = 0;
    	space = 0;
    		result();
    		comments();
    		selectCat();
    		
  }

  play();

  // Hint

      hint.onclick = function() {

      hints = ["Girl on top", "The man pleasures ;)", "The woman pleasures ;)",
    "Hollywood's favorite position", "Porno's favorite position", "French for a lot of fun",
    "BDSM little", "BDSM big", "Pain for pleasure", "No gag reflex", "Guy hubby watches",
    "Girl hubby watches", "Mix it up!", "Regular stuff", "Girl on top other way",
    "Toy that shakes", "Balls tied in a string?", "Another word for vagina", "Lots of people having fun",
    "Let's trade!", "Focus on the bottom, way bottom", "Lude word for biological progress",
    "Lots of guys/girls on one guy/girl", "Professional Actress/Actor", "R. Kelly"];


    var hintIndex = words.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints[catagoryIndex][hintIndex];
  };



  //need a reset (an alert that pops up for new game!-->


    document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }


}



	



	