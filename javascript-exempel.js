function authorDialog() {
    alert("Valentin har skapat sidan, den 22 mars 2021.");
}
function Färg(){
    document.getElementById("rubrik").innerHTML = "Valentin";
    document.getElementById("demo").style.backgroundColor = "lightblue";
}
function bild() {
    if (document.getElementById("myImage").src == "https://live.staticflickr.com/65535/48605819027_8f47be59f2_b.jpg") {
        document.getElementById("myImage").src = "http://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6";
        document.getElementById("undertext").innerHTML = "Bästa spelet!";
    }
    else {
        document.getElementById("myImage").src = "https://live.staticflickr.com/65535/48605819027_8f47be59f2_b.jpg";
        document.getElementById("undertext").innerHTML = "Skit spel ";    
    }
}
function skrivtext(){
    var namn = document.getElementById("namn").value;
    document.getElementById("text").innerHTML = namn;
}
/* Valentin
    Datum: 22 mars 2021
*/
