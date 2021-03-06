/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var target = document.getElementById("target").innerText;
    document.getElementById("target").innerText = "";

    var sizes = [12, 14, 16, 18, 20, 22, 24];
    var i = 0;
    target.split("").forEach(function(letter){
        var span = document.createElement("span");
        span.style.fontSize = sizes[i] + "px";
        span.innerText = letter;
        document.getElementById('target').appendChild(span);

        if(letter !== ''){
            i++;
        }

        if(i === sizes.length-1){
            i = 0;
            sizes.reverse();
    }
    })

})();
