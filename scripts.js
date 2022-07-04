// selector and elements
   let screen = document.querySelector("canvas");
   let hideExit = document.getElementById("exit-game-id").style.display = "none"
   let exitBtn = document.getElementById("exit-game-id");
   let frame = document.getElementById('forca').getContext('2d');


// variables
   let maskW = "";
   let rightWord = "";
   let letters = [];
   let chosenLetter = [];
   let wrongLetters = [];
   let errors = 8;
   let nberOfErrors = 8;

const words = ['ANALYSIS', 
               'ALGEBRA', 
               'TOPOLOGY', 
               'CALCULUS', 
               'EQUATION', 
               'SERIES', 
               'GEOMETRY', 
               'COMBINATORICS', 
               'FUNCTION', 
               'FACTORIAL'];

// events
   document.getElementById("start-game").onclick = () => {
      startGame();
   }

   exitBtn.addEventListener("click",function () {
      location.reload();
      });

   function choseMaskW() {
      let word = words[Math.floor(Math.random() * words.length)]
      maskW = word
      return word
   }

   // verify letter
      function verifyCLetter(key) {
         if (letters.length < 1 || letters.indexOf(key) < 0) {
            letters.push(key)
            return false
         }
         else {
            letters.push(key)
            return true
         }
      }

   function addRLetter(i) {
      rightWord += maskW[i].toUpperCase()
   }

   function addWLetter(lettter) {
      if (maskW.indexOf(lettter) <= 0) {
      errors -= 1
      }
   }

   // letter repetition
      function gameOver(letter) {
         if(chosenLetter.length < maskW.length) { 
            wrongLetters.push(letter);
            if (wrongLetters.length > nberOfErrors) {
               showDefeat()
            }
            else if(chosenLetter.length < maskW.length) {
               addWLetter(letter)
               writeWrongLetter(letter, errors)
            }
         }
      }

   // winner check
      function winner(letter) {
         chosenLetter.push(letter.toUpperCase());
         if (chosenLetter.length == maskW.length) {
         showVictory()
         }
      }

   // only letters
      function verifyLetter(keyCode) {
         if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
            return true;
         } 
         else {
            return false;
         }
      }

   // start
      function startGame() {
         document.getElementById("hide-div").style.display = 'none';
         drawFrame();
         choseMaskW();
         drawLine();
         document.getElementById("exit-game-id").style.display = "block";
         document.onkeydown = (e) => {
            let letter = e.key.toUpperCase()
            if (wrongLetters.length <= nberOfErrors) {
               if (!verifyCLetter(e.key) && verifyLetter(e.keyCode)) {
                  if (maskW.includes(letter)) {
                     addRLetter(maskW.indexOf(letter))
                     for (let i = 0; i < maskW.length; i++) {
                        if (maskW[i] === letter) {
                        writeRightLetter(i)
                        winner(letter)                        
                        }
                     }
                  }
                  else {
                     if (!verifyCLetter(e.key) && !winner(letter))
                     return
                        mainDraw(errors)
                        gameOver(letter)
                     }
               }
            }
            else {
               alert('Game Over!')
               }
         };
      }