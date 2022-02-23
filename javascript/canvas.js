function canvas_RAW_GeneraFigura(url, x, y, w, h, funct) {

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

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