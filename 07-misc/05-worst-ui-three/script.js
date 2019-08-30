/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("target").innerText = "+32460000000"
    var buttons = document.querySelectorAll("button");


    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            //console.log(button.previousSibling.previousSibling);

            var input = button.previousSibling.previousSibling;
            var min = Number(input.getAttribute("data-min"));
            var max = Number(input.getAttribute("data-max"));

            var random = Math.floor(Math.random() * (max - min + 1)) + min;

            input.value = random;

            if (random < 10){
                input.value = "0" + random;
            }

            var one = document.getElementById("part-one").value;
            var two = document.getElementById("part-two").value;
            var three = document.getElementById("part-three").value;
            var four = document.getElementById("part-four").value;

            document.getElementById("target").innerHTML = "+32" + one + two + three + four ;
        });
    });
})();
