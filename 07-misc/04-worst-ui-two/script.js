/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    /* Useful links

    https://flaviocopes.com/add-click-event-to-dom-list/
    https://davidwalsh.name/parseint-radix

     */

    // your code here

    document.getElementById("target").innerText = "+32460000000"
    var buttons = document.querySelectorAll("button");


    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            //console.log("forEach worked");
            var min = button.getAttribute("data-min");
            var max = button.getAttribute("data-max")
            var current = parseInt(button.innerText,10);
            //console.log(min);
            //console.log(max);
            //console.log(current);
            if (current < max){
                current++;
                button.innerHTML = current ;
            }
            else{
                button.innerHTML = min ;
            }

            if (current < 10){
                button.innerHTML = "0" + current;
            }
            var one = document.getElementById("part-one").innerHTML;
            var two = document.getElementById("part-two").innerHTML;
            var three = document.getElementById("part-three").innerHTML;
            var four = document.getElementById("part-four").innerHTML;

            console.log(one);

            document.getElementById("target").innerHTML = "+32" + one + two + three + four ;
        });
    });

})();
