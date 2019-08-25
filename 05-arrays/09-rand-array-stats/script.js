/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function(){

        //create array with 10 elements
        var arr = [];
        for (let i=0;i<10;i++){
            arr.push(Math.round(Math.random()*100))
        }
        //display elements in table
        document.getElementById("n-1").innerHTML = arr[0];
        document.getElementById("n-2").innerHTML = arr[1];
        document.getElementById("n-3").innerHTML = arr[2];
        document.getElementById("n-4").innerHTML = arr[3];
        document.getElementById("n-5").innerHTML = arr[4];
        document.getElementById("n-6").innerHTML = arr[5];
        document.getElementById("n-7").innerHTML = arr[6];
        document.getElementById("n-8").innerHTML = arr[7];
        document.getElementById("n-9").innerHTML = arr[8];
        document.getElementById("n-10").innerHTML = arr[9];

        //display smallest number
        var min = Math.min(... arr);
        document.getElementById("min").innerHTML = min;

        //display largest number
        var max = Math.max(... arr);
        document.getElementById("max").innerHTML = max;

        //calculate and display sum of all numbers
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        document.getElementById("sum").innerHTML = sum;

        //calculate and display average of all numbers

        document.getElementById("average").innerHTML = sum / arr.length;

    })

})();
