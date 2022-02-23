
/* funzioni */
function RenderImage(url, x, y, w, h, funct) {

    let canvas =    document.getElementById("canvas");
    let ctx =       canvas.getContext("2d");

    // funzione su richiesta
    if (funct != undefined) {
        funct();
    }

    // caricare le proprietà
    var image = new Image();

    // su caricamento, caricare immagine sul canvas
    image.onload = function() {
        ctx.drawImage(image, x, y, w, h);
    }

    // sorgente immagine (anche locale)
    image.src = url;

    return image;
}

var window_x = 100;
var window_y = 50;

function main_init() {
    
    document.getElementById("bho").write = "idk";

    console.log("window.x " + innerWidth);
    console.log("window.h " + innerHeight);

    for (var x = 0; x < window_x; x+=10) {
        RenderImage("resources/images/test.png", x, 50, 50, 50);
    }

}

//var mazzo [] 