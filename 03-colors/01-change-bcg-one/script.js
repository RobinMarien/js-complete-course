/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("red").addEventListener("click", function add() {
        document.body.style.background = "#FF0000";
    });

    document.getElementById("green").addEventListener("click", function add() {
        document.body.style.background = "#00ff00";
    });

    document.getElementById("yellow").addEventListener("click", function add() {
        document.body.style.background = "#fff600";
    });

    document.getElementById("blue").addEventListener("click", function add() {
        document.body.style.background = "#0000FF";
    });
})();
