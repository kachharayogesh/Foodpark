function openmenu(evt, cityName) {
    var i, tablinks;
    var x = document.getElementsByClassName("tabcontent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }

   tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

}

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";


}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

console.log('john');


