document.getElementById("foot01").innerHTML = 
	"<p>&copy; " + 
	new Date().getFullYear() + 
	" W3Schools. All rights reserved.</p>";
	
document.getElementById("nav01").innerHTML = 
	"<ul id='menu'>" + 
	"<li><a href='Index.html'>Home</a></li>" + 
	"<li><a href='Customers.html'>Data</a></li>" + 
	"<li><a href='Customers_2.html'>Data 2</a></li>" + 
	"<li><a href='Customers_Json.html'>Data Json</a></li>" + 
	"<li><a href='About.html'>About</a></li>" + 
	"</ul>";
	
var xmlhttp = new XMLHttpRequest();
var url = "http://www.w3schools.com/website/Customers_HTML.php";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("id01").innerHTML =
        xmlhttp.responseText;
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

var xmlhttp_json = new XMLHttpRequest();
var url_json = "http://www.w3schools.com/website/Customers_JSON.php";

xmlhttp_json.onreadystatechange = function() {
    if (xmlhttp_json.readyState == 4 && xmlhttp_json.status == 200) {
        myFunction(xmlhttp_json.responseText);
    }
}
xmlhttp_json.open("GET", url_json, true);
xmlhttp_json.send();

function myFunction(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "<table><tr><th>Name</th><th>City</th><th>Country</th></tr>";

    for(i = 0; i < arr.length; i++) {
        out += "<tr><td>" + 
        arr[i].Name +
        "</td><td>" +
        arr[i].City +
        "</td><td>" +
        arr[i].Country +
        "</td></tr>";
    }

    out += "</table>"
    document.getElementById("id02").innerHTML = out;
}