/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here       |       https://www.geeksforgeeks.org/creating-range-slider-html-using-javascript/


    var rangeslider = document.getElementById("slider");
    var output = document.getElementById("target");
    output.innerHTML = "0" + rangeslider.value;

    rangeslider.oninput = function() {
        output.innerHTML = "0"+ this.value;
    }
})();
