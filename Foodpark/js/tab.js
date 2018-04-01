function openmenu(cityName) {
    var i;
    var x = document.getElementsByClassName("tabcontent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(cityName).style.display = "block"; 
}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

console.log('john');


