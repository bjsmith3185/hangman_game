// $(document).ready(function() {
    

//     var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","_"];
//     var main = $("body");
//     var buttons = main.find("#letter-area");
//     var selectedLetter;
//     var movies = ["top_gun", "dinasour_park", "gun_fighter","fast_and_furious","notebook","forrest_gump","frozen"];
//     var songs = ["wildflowers", "down_south", "refugee"];
//     var burgers = ["tomato", "mustard", "bacon"];
//     var cars = ["ford", "chevy", "dodge", "lexus"];
    
//     var selectedWord;
//     var category;
//     var wordToGuessArray = [];  
//     var lengthOfWordToGuess; 
//     var displayArray = []; 
//     var isInArray = false;
//     var wins = 0;
//     var losses = 0;
//     var misses = 0;
//     var gameOn = true;
    
//     $(".container-welcome-screen").hide();
//     $(".container-game-screen").hide();
//     $(".container-loss-screen").show();
    
    
//     $("body").on("click", ".category-buttons", function() {
//         category = $(this).val();
//         $(".container-game-screen").show();
//         $(".container-welcome-screen").hide();
//         $(".container-loss-screen").hide();
//         $(".wins").text(wins);
//         $(".losses").text(losses);
       
//         startGame(category);
//     });
    
    
    
//     function startGame(category) {
//         misses = 0;
//         displayArray = [];
//         lengthOfWordToGuess;
//         wordToGuessArray = [];
//         selectedWord;
//         if (category === "movies") {
//             $("#category-name").text("Movie titles");
//             selectedWord = movies[Math.floor(Math.random() * movies.length)];
//             } else if (category === "songs") {
//                 $("#category-name").text("Song titles");
//             selectedWord = songs[Math.floor(Math.random() * songs.length)];
//         } else if (category === "burgers") {
//             $("#category-name").text("Burger toppings");
//             selectedWord = burgers[Math.floor(Math.random() * burgers.length)];
//         } else if (category === "cars") {
//             $("#category-name").text("Car manufacturers");
//             selectedWord = cars[Math.floor(Math.random() * cars.length)];
//         }
//         console.log("selected word: " + selectedWord);
//         lengthOfWordToGuess = selectedWord.length;
//         wordToGuessArray = selectedWord.split("");
//         for (var i = 0; i < lengthOfWordToGuess; i++) {
//             displayArray.push("_");
//         }
//         $("#guess-area").text(displayArray.join(" "));
//         // $(".picture-area").prepend("<img id='missImage' src='../images/first.JPG'/>")
    
//         createButtons();
//     };
    
//     function createButtons() {
//         $("#letter-area").empty();
//         gameOn = true;
//         for (var i = 0; i < letters.length; i++) {
//             var letterButton = $("<button>");
//             letterButton.addClass("letter letter-btn-color").attr("data-newletter", letters[i]).text(letters[i]);  
//             buttons.append(letterButton);
//           }
//     };
    
       
//     buttons.on("click", ".letter", function() {
//         if (gameOn) {
//         selectedLetter = $(this).attr("data-newletter");
//         $(this).hide();
        
//         doesLetterExist(selectedLetter);
//         didIWin();
//         }
//     });
     
    
    
//     function doesLetterExist(selectedLetter) {
//         isInArray = false;
        
//         for (var i = 0; i < lengthOfWordToGuess; i++) {
//             if(selectedLetter === wordToGuessArray[i]) {
//                 isInArray = true;
//             } 
//         } 
        
//         if (isInArray) {
//             for (var i = 0; i < lengthOfWordToGuess; i++) {
//                 if(selectedLetter === wordToGuessArray[i]) {
//                     displayArray[i] = selectedLetter;
//                 }
//                 $("#guess-area").text(displayArray.join(" "));  
//             }
               
//             } else {
//                 misses++;
//                 console.log("this is misses: " + misses);
//                 changeImage(misses);
                
//             }
//     };
    
    
    
//     function didIWin() {
//         if (displayArray.toString() === wordToGuessArray.toString()) {
//             wins++;
//             $(".wins").text(wins);
            
//             startGame();
//     } else if (misses === 7) {
//             gameOn = false;
//             losses++;
//             $(".losses").text(losses);
//             $(".container-game-screen").hide();
//             $(".container-loss-screen").show();
           
//         }
//     };
    
//     $("#nextWord").on("click", function() {
//         startGame(category);
//         $(".container-loss-screen").hide();
//         $(".container-game-screen").show();
//     });
    
    
//     $("#redo").on("click", function() {
//         $(".container-game-screen").hide();
//         $(".container-loss-screen").hide();
//         $(".container-welcome-screen").show();
//         wins = 0;
//         losses = 0;
//     });
    
      
//     // end of document ready
    
//     function changeImage(misses) {
//         if (misses === 1) {
//             $("#missesPic").attr('src', 'assets/images/2.JPG');
//         } else if (misses === 2) {
//             $("#missesPic").attr('src', 'assets/images/3.JPG');
//         }else if (misses === 3) {
//             $("#missesPic").attr('src', 'assets/images/4.JPG');
//         }else if (misses === 4) {
//             $("#missesPic").attr('src', 'assets/images/5.JPG');
//         }else if (misses === 5) {
//             $("#missesPic").attr('src', 'assets/images/6.JPG');
//         }else if (misses === 6) {
//             $("#missesPic").attr('src', 'assets/images/7.JPG');
//         // }else if (misses === 7) {
//         //     $("#missesPic").attr('src', 'assets/images/8.JPG');
//          };
//     };
//     });

// // function winning() {
// //     setInterval(images, 1000);

//     function images() {
//         var winArray = ["one", "two", "three"];

//         for (var i = 0; i < winArray.length; i++) {
//             $("#winPic").text(winArray[i]);
//         }
//     };
// // }
// images();
// // winning();

var count = 1;
// var winArray = ["assets/images/win1.JPG", "assets/images/win1.JPG", "assets/images/win1.JPG"];
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
    