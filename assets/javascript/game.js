$(document).ready(function () {

    // Here we are provided an initial array of letters.
    // Use this array to dynamically create buttons on the screen.
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
        "Y", "Z", "_"];


    // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
    // =================================================================================

    // 1. Create a for-loop to iterate through the letters array.
    for (let i = 0; i < letters.length; i++) {
        // Inside the loop...

        // 2. Create a variable named "letterBtn" equal to $("<button>");
        const letterBtn = $("<button>");

        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        letterBtn.addClass("letter-button letter letter-button-color");

        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        letterBtn.attr("data-letter", letters[i]);

        // 5. Then give each "letterBtns" a text equal to "letters[i]".
        letterBtn.text(letters[i]);

        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#buttons").append(letterBtn);

    }
    
    var demop = document.getElementById("theword");
    var gameStatus = document.getElementById("win_lose");
    var count = document.getElementById("count");

    var listoffruits = [
        "apple",
        "banana",
        "guava"
    ];
    var targetFruit = listoffruits[Math.floor(Math.random() * listoffruits.length)];
    console.log(targetFruit);

    var hangman = {
        fruit: targetFruit,
        fillguess: [],
        resultshow:"",
        actualResult: "",
        guessCount: 0,
        isGuesssRight: false,
        isWin: false,
        isLost: false,

        PopulateGuessBlanks: function(){
            for (let j = 0; j < this.fruit.length; j++) {
                this.fillguess.push("_");
                console.log(this.fruit[j]);
            } 
        },

        GuessTheWord: function(letter){
            this.isGuesssRight = false;        
            var valid = this.fruit.indexOf(letter);
            while (valid !== -1) {
                this.fillguess[valid] = letter;
                valid = this.fruit.indexOf(letter, valid + 1);
                this.isGuesssRight = true;

            }
            if(this.isGuesssRight === false){
                this.guessCount++;
            } 
        },
        
        Show: function(){
            
            this.resultshow = this.fillguess.join(" ");
            this.actualResult = this.fillguess.join("");
            console.log(this.resultshow);
            console.log(this.actualResult);
            console.log(this.guessCount);
            //$("#demo").append("<p>" + this.resultshow + "</p>");
            
            if((this.actualResult === this.fruit) && (this.guessCount < 10))
            {
                this.isWin = true;
                this.isLost = false;
            } 
            else if ((this.actualResult !== this.fruit) && (this.guessCount >= 10)){
                this.isWin = false;
                this.isLost = true;
            }
            else{
                this.isWin = false;
                this.isLost = false;
            }
            console.log(this.isLost);
            demop.innerHTML = (this.resultshow);
            if (this.isWin === true) {
                gameStatus.innerHTML = ("YOU WON!!!");
            }
            if (this.isLost === true) {
                gameStatus.innerHTML = ("YOU LOST :(");
            }
            count.innerHTML = (this.guessCount);
        }

    };

    hangman.PopulateGuessBlanks();
    hangman.Show();

    // 7. Create an "on-click" event attached to the ".letter-button" class.
    $(".letter-button").on("click", function () {
        
        //var letter = $(this).attr("data-letter");
        
        var letter = $(this).attr("data-letter").toLowerCase();
        if ((hangman.guessCount < 10)&&(hangman.isWin==false)) {
            console.log(letter);
            hangman.GuessTheWord(letter);
            hangman.Show();
        }

    });

});
