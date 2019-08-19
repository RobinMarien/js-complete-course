/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function add() {
        // perform an addition
        var one = Number(document.getElementById("op-one").value);
        var two = Number(document.getElementById("op-two").value);
        var answer = one + two;
        alert(one + " + " + two + " = " + answer);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        var one = Number(document.getElementById("op-one").value);
        var two = Number(document.getElementById("op-two").value);
        var answer = one - two;
        alert(one + " - " + two + " = " + answer);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var one = Number(document.getElementById("op-one").value);
        var two = Number(document.getElementById("op-two").value);
        var answer = one * two;
        alert(one + " * " + two + " = " + answer);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var one = Number(document.getElementById("op-one").value);
        var two = Number(document.getElementById("op-two").value);
        var answer = one / two;
        alert(one + " / " + two + " = " + answer);
    });
})();
