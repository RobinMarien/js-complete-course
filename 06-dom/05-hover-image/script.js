/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    //getting the (new) value from data-hover attr of img
    var image = document.getElementsByTagName("img");
    var new_value = image[0].getAttribute("data-hover");

    //getting the (old) original src value of the img
    var old_value = image[0].getAttribute("src");


    //changing the src attribute when hovering over image
    image[0].onmouseover = function(){
        image[0].setAttribute("src", new_value);

    /*  We can also use
         image[0].src = new_value;
     */
    }

    //changing src back to original value when 'leaving' the img
    image[0].onmouseleave = function(){
        image[0].src = old_value;
    }



})();
