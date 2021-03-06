
$(document).ready(function() {

var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var main = $("body");
var buttons = main.find("#letter-area");
var selectedLetter;
var arcade = ["pacman", "space invaders", "pong", "donkey kong", "aseroids", "centipede", "dig dug", "pole position", "spy hunter", "commando"];
var movies = ["terminator", "commando", "predator","twins","true_lies","kindergarten_cop","pumping_iron"];
var songs = ["keep_on_loving_you", "celebration", "who_can_it_be_now", "mickey", "beat_it", "all_night_long", "time_after_time", "the_power_of_love", "we_build_this_city", "livin_on_a_prayer", "la_bamba", "welcome_to_the_jungle", "free_fallin"];
var burgers = ["tomato", "mustard", "bacon", "ketchup", "mayo", "lettuce", "egg", "pickles"];
var cars = ["ford", "chevy", "dodge", "lexus", "kia", "toyota", "honda", "jeep", "chrystler"];
var wwe = ["big_show", "brock_lesnar","matt_hardy", "the_rock", "steve_austin", "undertaker", "cm_punk", "john_cena", "booker_t", "hhh", "golddust", "aj_styles", "carmella", "dolph_ziggler", "billy_gunn", "big_bossman" ];
var count = 1;
var selectedWord;
var category;
var wordToGuessArray = [];  
var lengthOfWordToGuess; 
var displayArray = []; 
var isInArray = false;
var wins = 0;
var losses = 0;
var misses = 0;
var gameOn = true;

$(".container-welcome-screen").show();
$(".container-game-screen").hide();
$(".container-loss-screen").hide();
$(".container-win-screen").hide();


$("body").on("click", ".category-buttons", function() {
    category = $(this).val();
    $(".container-game-screen").show();
    $(".container-welcome-screen").hide();
    $(".container-loss-screen").hide();
    $(".container-win-screen").hide();
    $(".wins").text(wins);
    $(".losses").text(losses);
   
    startGame(category);
});


function startGame(category) {
    misses = 0;
    displayArray = [];
    lengthOfWordToGuess;
    wordToGuessArray = [];
    selectedWord;
    if (category === "movies") {
        $("#category-name").text("Movie titles");
        selectedWord = movies[Math.floor(Math.random() * movies.length)];
        } else if (category === "songs") {
            $("#category-name").text("80's Song titles");
        selectedWord = songs[Math.floor(Math.random() * songs.length)];
    } else if (category === "burgers") {
        $("#category-name").text("Burger toppings");
        selectedWord = burgers[Math.floor(Math.random() * burgers.length)];
    } else if (category === "cars") {
        $("#category-name").text("Car manufacturers");
        selectedWord = cars[Math.floor(Math.random() * cars.length)];
    } else if (category === "wwe") {
        $("#category-name").text("WWE Wrestlers");
        selectedWord = wwe[Math.floor(Math.random() * wwe.length)];
    } else if (category === "arcade") {
            $("#category-name").text("Old Arcade Games");
            selectedWord = arcade[Math.floor(Math.random() * arcade.length)];
    };

    var selectedWord = ["donkey kong"];

    console.log("selected word: " + selectedWord);
    var lengthOfWordToGuess = selectedWord.length;
    var wordToGuessArray = selectedWord.split("");
    console.log("this is wordtoguessarray: " + wordToGuessArray);
    for (var i = 0; i < lengthOfWordToGuess; i++) {
        if (wordToGuessArray[i] === " ") {
            console.log("inside loop");
            displayArray.push("    ");
        } else {
            displayArray.push("_");
        };
        
    };

    console.log("this is displayArray: " + displayArray);




    $("#guess-area").text(displayArray.join(" "));
  
    createButtons();
};

function createButtons() {
    $("#letter-area").empty();
    gameOn = true;
    for (var i = 0; i < letters.length; i++) {
        var letterButton = $("<button>");
        letterButton.addClass("letter letter-btn-color").attr("data-newletter", letters[i]).text(letters[i]);  
        buttons.append(letterButton);
      }
};

   
buttons.on("click", ".letter", function() {
    if (gameOn) {
    selectedLetter = $(this).attr("data-newletter");
    $(this).hide();
    
    doesLetterExist(selectedLetter);
    didIWin();
    }
});
 


function doesLetterExist(selectedLetter) {
    isInArray = false;
    
    for (var i = 0; i < lengthOfWordToGuess; i++) {
        if(selectedLetter === wordToGuessArray[i]) {
            isInArray = true;
        } 
    } 
    
    if (isInArray) {
        for (var i = 0; i < lengthOfWordToGuess; i++) {
            if(selectedLetter === wordToGuessArray[i]) {
                displayArray[i] = selectedLetter;
            }
            $("#guess-area").text(displayArray.join(" "));  
        }
           
        } else {
            misses++;
            console.log("this is misses: " + misses);
            changeImage(misses);
            
        }
};

function changeImage(misses) {
    if (misses === 1) {
        $("#missesPic").attr('src', 'assets/images/2.JPG');
    } else if (misses === 2) {
        $("#missesPic").attr('src', 'assets/images/3.JPG');
    }else if (misses === 3) {
        $("#missesPic").attr('src', 'assets/images/4.JPG');
    }else if (misses === 4) {
        $("#missesPic").attr('src', 'assets/images/5.JPG');
    }else if (misses === 5) {
        $("#missesPic").attr('src', 'assets/images/6.JPG');
    }else if (misses === 6) {
        $("#missesPic").attr('src', 'assets/images/7.JPG');
    };
};


function didIWin() {
    if (displayArray.toString() === wordToGuessArray.toString()) {
        wins++;
        $(".wins").text(wins);
        $("#missesPic").attr('src', 'assets/images/1.JPG');
        $(".container-game-screen").hide();
        $(".container-win-screen").show();
        winning();
        
        // startGame();
} else if (misses === 7) {
        gameOn = false;
        losses++;
        $(".losses").text(losses);
        $(".container-game-screen").hide();
        $(".container-loss-screen").show();
}
};

$("#nextWord-lost").on("click", function() {
    startGame(category);
    $(".container-loss-screen").hide();
    $(".container-game-screen").show();
    $(".container-win-screen").hide();
    $("#missesPic").attr('src', 'assets/images/1.JPG');
      
});

$("#nextWord-win").on("click", function() {
    startGame(category);
    $(".container-loss-screen").hide();
    $(".container-game-screen").show();
    $(".container-win-screen").hide();
});


$("#redo").on("click", function() {
    // alert("hi");
    $(".container-game-screen").hide();
    $(".container-loss-screen").hide();
    $(".container-welcome-screen").show();
    $("#missesPic").attr('src', 'assets/images/1.JPG');
    wins = 0;
    losses = 0;
});

$("#redo-lost").on("click", function() {
    // alert("hi");
    $(".container-game-screen").hide();
    $(".container-loss-screen").hide();
    $(".container-welcome-screen").show();
    $("#missesPic").attr('src', 'assets/images/1.JPG');
    wins = 0;
    losses = 0;
});

function winning() {
    setInterval(nextImage, 300);
    
    function nextImage() {
        
        $("#winPic").attr('src', 'assets/images/win' + count + '.JPG');
        count++;
        if (count === 4) {
          count = 1;
        }
      };
};


});



