/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var months = new Array(12);
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

    document.getElementById("run").addEventListener("click",  function (){
        var date = new Date ();
        var year = document.getElementById("year").value;
        date.setFullYear(year,0,13);

        document.getElementById("answer").innerHTML = "";

        for (var i = 0; i<12; i++){
            date.setMonth(i);

            if (date.getDay() === 5){
                document.getElementById("answer").innerHTML += months[date.getMonth()] + "<br>";
            }
        }
    })

})();
