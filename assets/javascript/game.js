var str = "banana";
var guess = [];


for (let j = 0; j < str.length; j++) {
    guess.push("_");
    
    //console.log(str[j]);
}
console.log(guess.length);
var demop = document.getElementById("demo");
//demop.innerHTML = (guess);
var pos = " ";
var valid = str.indexOf('a');

while (valid !== -1) {
    //console.log(valid);
    //count++;
    //pos += valid;
    guess[valid] = 'a';
    valid = str.indexOf('a', valid + 1);
    
    
}
console.log(pos);

for (let j = 0; j < str.length; j++) {

    demop.innerHTML = demop.innerHTML + (" " + guess[j]) ;
    //console.log(str[j]);
}