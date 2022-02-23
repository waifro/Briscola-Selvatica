
// per comporre i array si usa questa sintasse:
// var variabile = [ "array 1", "array 2" , "etc" ];
/*
var raw_image_cards = new Image();
raw_image_cards = "resources/images/pc_carte.jpg";

var images = [];
images.push(raw_images_cards);
*/
var img = document.createElement("img");
img.src = "resources/images/pc_carte.jpg";
var src = document.getElementById("x");

src.appendChild(img);

var img = new Image();
var div = document.getElementById("x");

img.onload = function () {
    div.innerHTML += "<img src="'+resources/images/pc_carte.jpg+'" >
}

/*
// 4 gruppi di cui conterranno 10 carte e le proprie caratteristiche
var oggetto_spade = null;
var oggetto_denari = null;
var oggetto_bastoni = null;
var oggetto_coppe = null;
*/
