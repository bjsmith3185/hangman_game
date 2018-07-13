$(document).ready(function() {
    

    var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var main = $("body");
    var buttons = main.find("#letter-area");
    var selectedLetter;
    var arcade = ["pacman", "space invaders", "pong", "donkey kong", "aseroids", "centipede", "dig dug", "pole position", "spy hunter", "commando"];
    var movies = ["terminator", "commando", "predator","twins","true lies","kindergarten cop","pumping iron"];
    var songs = ["keep on loving you", "celebration", "who can it be now", "mickey", "beat it", "all night long", "time after time", "the power of love", "we build this city", "livin on a prayer", "la bamba", "welcome to the jungle", "free fallin"];
    var burgers = ["tomato", "mustard", "bacon", "ketchup", "mayo", "lettuce", "egg", "pickles"];
    var cars = ["ford", "chevy", "dodge", "lexus", "kia", "toyota", "honda", "jeep", "chrystler"];
    var wwe = ["big show", "brock lesnar","matt hardy", "the rock", "steve austin", "undertaker", "cm punk", "john cena", "booker t", "hhh", "golddust", "aj styles", "carmella", "dolph ziggler", "billy gunn", "big bossman" ];
    var count = 1;
    var selectedWord;
    var category;
    var wordToGuessArray = [];  
    var lengthOfWordToGuess; 
    var displayArray = []; 
    var checkArray = [];
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
        checkArray = [];
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
    
          console.log("selected word: " + selectedWord);
          lengthOfWordToGuess = selectedWord.length;
          wordToGuessArray = selectedWord.split("");
  
          for (var i = 0; i < lengthOfWordToGuess; i++) {
              if(wordToGuessArray[i] === " ") {
                  displayArray.splice(i, 1, '\u00A0');
              } else {
                  displayArray.push("_");
              }
          };
  
          for (var i = 0; i < lengthOfWordToGuess; i++) {
              if (wordToGuessArray[i] === " ") {
                  wordToGuessArray.splice(i, 1, "");
              }
          };
          
          $("#guess-area").empty();
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
          };
    };
         
    buttons.on("click", ".letter", function() {
        if (gameOn) {
        selectedLetter = $(this).attr("data-newletter");
        $(this).hide();
        
        doesLetterExist(selectedLetter);
        didIWin();
        };
    });
       
    function doesLetterExist(selectedLetter) {
        isInArray = false;
        
        for (var i = 0; i < lengthOfWordToGuess; i++) {
            if(selectedLetter === wordToGuessArray[i]) {
                isInArray = true;
            } 
        };
        
        if (isInArray) {
            for (var i = 0; i < lengthOfWordToGuess; i++) {
                if(selectedLetter === wordToGuessArray[i]) {
                    displayArray[i] = selectedLetter;
  
                    checkArray[i] = selectedLetter;
                }
                $("#guess-area").text(displayArray.join(" "));  
            };
               
            } else {
                misses++;
                console.log("this is misses: " + misses);
                changeImage(misses);
            };
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
        if (checkArray.toString() === wordToGuessArray.toString()) {
            wins++;
            $(".wins").text(wins);
            $("#missesPic").attr('src', 'assets/images/1.JPG');
            $(".container-game-screen").hide();
            $(".container-win-screen").show();
            winning();
                    
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
        $(".container-game-screen").hide();
        $(".container-loss-screen").hide();
        $(".container-welcome-screen").show();
        $("#missesPic").attr('src', 'assets/images/1.JPG');
        wins = 0;
        losses = 0;
    });
    
    $("#redo-lost").on("click", function() {
        $(".container-game-screen").hide();
        $(".container-loss-screen").hide();
        $(".container-welcome-screen").show();
        $("#missesPic").attr('src', 'assets/images/1.JPG');
        wins = 0;
        losses = 0;
    });
    
    function winning() {
        setInterval(nextImage, 1000);
        function nextImage() {
            $("#winPic").attr('src', 'assets/images/win' + count + '.JPG');
            count++;
            if (count === 4) {
              count = 1;
            }
        };
    };
    
    
    });
    
    
    
    