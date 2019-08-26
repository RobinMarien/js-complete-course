/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    //get value from attribute of source element
    var x = document.getElementById("source").getAttribute("data-image");

    //create new img element
    var image = document.createElement("img");
    //set value to src attribute of image
    image.setAttribute("src", "http://www.randomkittengenerator.com/cats/rotator.php");
    //place image inside figure element
    document.getElementById("target").appendChild(image);

    //remove original element
    var bye = document.getElementById("source");
    bye.remove();



})();
