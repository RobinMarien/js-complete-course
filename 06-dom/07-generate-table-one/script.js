/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    //create table
    var table = document.createElement("table");
    table.style.width = '50%';
    table.setAttribute('border', '1');

    //put table in target element
    document.getElementById("target").appendChild(table);

    //create 10 table rows & 10 table data

    for (var i = 0; i<10 ; i++) {
        var row = document.createElement("tr");
        var data = document.createElement("td");

        //put row(s) in table
        table.appendChild(row);
        //put data in row
        row.appendChild(data);

        //put numbers inside the table
        data.innerHTML = i + 1;
    }



})();
