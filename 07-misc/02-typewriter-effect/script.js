/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var array = document.getElementById("target").innerText.split("");
    document.getElementById("target").innerText = "" ;
    function happy (){
        document.getElementById("target").innerHTML += array.shift();
    }
    for (var i = 0; i<array.length; i++)
        setTimeout(happy, Math.floor(Math.random()*10000))
})();
