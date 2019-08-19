/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // your code here
    var answer = prompt("Would you like some cake?", "I'd suggest typing yes here!");

    if (answer == "yes") {
        //  block of code to be executed if the condition is true
        window.alert("You've made the right decision, have some cake!");
    } else {
        //  block of code to be executed if the condition is false
        window.alert("More cake for me then! :)");
    }
    //var x ="Hello "+ name + "!";

})();