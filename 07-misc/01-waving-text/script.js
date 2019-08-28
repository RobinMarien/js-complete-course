/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here       |      (Help by Joseph)

    //take the original p element and turn it into a container
    var container = document.getElementById("target");
    //take the current string inside of that container
    var letters = document.getElementById("target").innerText;
    //split the string up into an array
    letters = letters.split("");
    //"reset" the container, so it's empty
    container.innerText = "";

    //make a variable which will be our font size
    var fsize = 20;

    //The forEach() method calls a function once for each element in an array, in order.

    letters.forEach(function(letter) {

        /*for each element (which are the separate letters at this point), we are creating an extra span element,
        so we can apply styles to it */
        var wrap = document.createElement("span");
        //put every array element inside one of those spans we just created
        wrap.innerText = letter;
        //apply the fontsize (which is a variable we've set earlier (and put px behind it)
        wrap.style.fontSize = fsize +"px";
        //if the fontsize reaches a certain size, reset it back to a smaller font
        if (fsize > 35) {
            fsize = 15;
        }
        //increment the fontsize by 5 for each letter
        fsize += 5;
        //send the result back to the original container
        container.appendChild(wrap);
    });

})();
