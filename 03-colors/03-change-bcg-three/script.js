/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        /* Based on this example
        var min=4;
        var max=5;
        var random =
            Math.floor(Math.random() * (+max - +min)) + +min;
         */

        var x = Math.floor(Math.random() * 255);
        var y = Math.floor(Math.random() * 255);
        var z = Math.floor(Math.random() * 255);

        /* quick test
        document.body.style.background="rgb(255,0,0)"; */

        document.body.style.background = "rgb("+x+","+y+","+z+")";
        alert("Background color changed to rgb(" + x + ", " + y + ", " + z + ")");
    });
})();
