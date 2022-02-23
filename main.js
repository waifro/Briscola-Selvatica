
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

function main_init() {
    
    console.log("window.x " + innerWidth);
    console.log("window.h " + innerHeight);

    RenderImage("resources/images/test.png", 50, 50, 50, 50);

}

//var mazzo [] 