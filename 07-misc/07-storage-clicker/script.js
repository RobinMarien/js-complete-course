/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here  |  https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/

    document.getElementById("target").innerHTML = window.localStorage.getItem('number');

    var counter = parseInt(document.getElementById("target").innerHTML);

    document.getElementById("increment").addEventListener("click", function(){
        counter++;
        document.getElementById("target").innerHTML = counter;

        window.localStorage.setItem('number', JSON.stringify(counter));
    })

})();
