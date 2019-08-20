/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value
    var numbers = document.getElementById("numbers").value;
    var arr = numbers.split(",");
    document.getElementById("run").addEventListener("click", function() {
        // your code here
        arr.sort((a,b) => a - b);

        // Display the sorted list in the same input field ->
        // document.getElementById("numbers").value = arr;

        // Display the sorted list in an alert box
        alert(arr);
    });

})();
