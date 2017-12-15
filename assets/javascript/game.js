//var demop = document.getElementById("demo");
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
    isGuesssRight: false,
    resultshow:"",
    guessCount: 0,

    PopulateGuessBlanks: function(){
        for (let j = 0; j < this.fruit.length; j++) {
            this.fillguess.push("_");
            console.log(this.fruit[j]);
        } 
    },

    GuessTheWord: function(letter){
        this.guessCount = false;        
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
        console.log(this.resultshow);
        $("#demo").append("<p>" + this.resultshow + "</p>");
        //demop.innerHTML = (this.resultshow); 
    }

};

hangman.PopulateGuessBlanks();
hangman.Show();

document.onkeyup = function (event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    hangman.GuessTheWord(letter);
    hangman.Show();
    if(hangman.guessCount===10)
    {
        return false;    
    }
};
