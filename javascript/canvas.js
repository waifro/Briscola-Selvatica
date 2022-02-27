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

function canvas_RAW_GeneraFiguraRitaglio(url, x1, y1, w1, h1, x2, y2, w2, h2, funct) {

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
        ctx.drawImage(image, x1, y1, w1, h1, x2, y2, w2 ,h2);
    }

    // sorgente immagine (anche locale)
    image.src = url;

    return image;
}