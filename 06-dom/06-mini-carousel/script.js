/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    var image = document.getElementsByTagName("img");
    image[0].src = gallery[0];
    var length = gallery.length;
    var i = 0;

    document.getElementById("next").addEventListener("click", function(){

        image[0].src = gallery[i];

        if (i == length-1){
            i=0;
        }
        else{
            i++;
        }
        
    })


})();
