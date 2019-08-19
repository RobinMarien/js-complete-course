/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function x() {

    // your code here
    var age_gender_town=prompt("Enter your age, your gender and your town (use , as a separator)","18,male, Antwerp"),
        age=age_gender_town.split(",")[0],
        gender=age_gender_town.split(",")[1],
        town=age_gender_town.split(",")[2];

    var answer = confirm("Your age is " + age +", your gender is " + gender + " and your town is " + town);
    if (answer === false){
        x();
    }

})();
