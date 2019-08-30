/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var number = Math.floor(Math.random() * 100)+1;
    var counter = 1;

    function guess(){
        var answer = prompt("Guess the number between 1 and 100");

        if (answer == number){
            alert("You found the number! \n Attempts: " + counter)
        }
        else if (answer > number){
            counter++;
            alert("The number is lower, try again!");
            guess();
        }
        else {
            counter++;
            alert("The number is higher, try again!");
            guess()
        }
    }

    guess();


})();
