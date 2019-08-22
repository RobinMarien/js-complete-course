/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {

        var userday= document.getElementById("dob-day").value;
        var usermonth = document.getElementById("dob-month").value;
        var useryear = document.getElementById("dob-year").value;

        var d = new Date();
        var m = (d.getMonth()+1) - usermonth;
        var day = d.getDate() - userday;

        var age = d.getFullYear() - useryear;


        if (m == 0 && day == 00){
            alert ("Happy birthday!!! \nYou are now " + age + " years old!");
        }
        else if ( m <= 0 && day < 0){
            age = age - 1;
            alert ("Your birthday: " + userday + "/" + usermonth + "/" + useryear + "\nYour age: " + age);
        }
        else
            alert ("Your birthday: " + userday + "/" + usermonth + "/" + useryear + "\nYour age: " + age);

    });
})();