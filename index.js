function goToSamhitha() {
    window.open("https://samhitha.ag/");
}       

 document.getElementById("showTel").addEventListener("click", function() {
    var button2 = document.getElementById("showEng"); 
    button2.classList.remove("clicked"); 
    var button = document.getElementById("showTel"); 
    button.classList.add("clicked"); 
    var hiddenElement = document.getElementById("telElement"); 
    hiddenElement.style.display = "block"; 
    var hideElement = document.getElementById("engElement"); 
    hideElement.style.display = "none";

 }); 

 document.getElementById("showEng").addEventListener("click", function() {
    var button2 = document.getElementById("showTel"); 
    button2.classList.remove("clicked"); 
    var button = document.getElementById("showEng"); 
    button.classList.add("clicked"); 
    var hiddenElement = document.getElementById("engElement"); 
    hiddenElement.style.display = "block"; 
    var hideElement = document.getElementById("telElement"); 
    hideElement.style.display = "none";
 }); 
