$(document).ready(function() {

    $(".container-game-screen").hide();


var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","_"," "];
var main = $("body");
var btns = main.find("#letter-area");
var selectedLetter;
var movies = ["top gun", "dinasour park", "gun fighter","fast and furious","notebook","forrest gump","frozen"];
var songs = ["wildflowers", "down south", "refugee"];
var burgers = ["tomato", "mustard", "bacon"];
var cars = ["ford", "chevy", "dodge", "lexus"];
var selectedWord;
var category;
var wordToGuessArray = [];
var lengthOfWordToGuess;
var displayArray = [];
var nextWord = false;
var wins = 0;
var losses = 0;
var misses = 0;



function selectWord(category) {
    if (category === "movies") {
        $("#category-name").text("Movie titles");
        selectedWord = movies[Math.floor(Math.random() * movies.length)];
        } else if (category === "songs") {
            $("#category-name").text("Song titles");
        selectedWord = songs[Math.floor(Math.random() * songs.length)];
    } else if (category === "burgers") {
        $("#category-name").text("Burger toppings");
        selectedWord = burgers[Math.floor(Math.random() * burgers.length)];
    } else if (category === "cars") {
        $("#category-name").text("Car manufacturers");
        selectedWord = cars[Math.floor(Math.random() * cars.length)];
    }
    console.log("selected word for array: " + selectedWord);

    // insert selected word into array
    
    lengthOfWordToGuess = selectedWord.length;
    // console.log("length of word: " + lengthOfWordToGuess);

    wordToGuessArray = selectedWord.split("");
    console.log("guess array: " + wordToGuessArray);

    for (var i = 0; i < lengthOfWordToGuess; i++) {
        displayArray.push("_");
        
    }
    // console.log("displayArray: " + displayArray);
    $("#guess-area").text(displayArray.join(" "));

    
};

function createButtons() {
    $("#letter-area").empty();
    for (var i = 0; i < letters.length; i++) {
        var letterButton = $("<button>");
        letterButton.addClass("letter letter-btn-color").attr("data-newletter", letters[i]).text(letters[i]);  //letter-button  letter-button-color
        // letterButton.attr("data-letter", letters[i]);
        // letterButton.text(letters[i]);
        btns.append(letterButton);
      }
};

function pickLetter() {
    btns.on("click", ".letter", function() {
        selectedLetter = $(this).attr("data-newletter");
        // console.log("this is the letter selected: " + selectedLetter);
        $(this).hide();
        checkLetter(selectedLetter);
      });
};


function checkLetter(selectedLetter) {
    for (var i = 0; i < lengthOfWordToGuess; i++) {
        if(selectedLetter === wordToGuessArray[i]) {
           
            // console.log("is in the word: " + populateArray);
            updateArray(selectedLetter);
        } else {
          
            misses++;
            // send a signal to reduce number of guesses left
        }
    }
};


function updateArray (selectedLetter) {
    for (var i = 0; i < lengthOfWordToGuess; i++) {
        if(selectedLetter === wordToGuessArray[i]) {
            displayArray[i] = selectedLetter;
            // console.log(displayArray);
            // console.log(wordToGuessArray);
            $("#guess-area").text(displayArray.join(" "));
            if (displayArray.toString() === wordToGuessArray.toString()) {
                    // alert("you won");
                    wins++;
                    nextWord = true;
                    console.log("this is nextWord status: " + nextWord);
                    console.log("this is category: " + category);
                    reset();

            }
        }
    };
};


function reset() {
    if (nextWord) {
        nextWord = false;
        createButtons();
        selectWord(category);
        pickLetter();
        $("#guess-area").empty();
        $(".wins").text(wins);
        $(".losses").text(losses);
    }
}


$("body").on("click", ".category-buttons", function() {
    category = $(this).val();
    // console.log("category: " + category);
    $(".container-welcome-screen").hide();
    $(".container-game-screen").show();
    selectWord(category);
    createButtons();
    pickLetter();
    $(".wins").text(wins);
    $(".losses").text(losses);
  
});


function restart() {
    btns = main.find("#letter-area");
    selectedLetter;
    selectedWord;
    category;
    wordToGuessArray = [];
    lengthOfWordToGuess;
    displayArray = [];
    wins = 0;
    losses = 0;
    $(".container-game-screen").hide();
    $(".container-welcome-screen").show();
    $("#letter-area").empty();
};

$("#restart").on("click", function() {
    restart();
});

});



// create an update score function to run after the letter button onlcick event. 
// create a function to update a picture of a hang man. 
