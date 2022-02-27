function raw_carta() {

    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;

    return this;
}

function raw_imagesize(pathname) {

    let img = new Image();
    img.src = pathname;

    img.onload = function() {
        this.width = img.width;
        this.height = img.height;
        console.log("w: " + this.width);
        console.log("h: " + this.height);
    }

    return this;
}

function inizializza_mazzo(pathname) {

    var size = raw_imagesize(pathname);
    
    alert(size.width + "x" + size.height);
    
    var array = [];

    var foo = size.width / 10;
    var bar = size.height / 4;   

    var i, o;

    for (var n = 0; n < 40; n++) {

        buffer = new raw_carta();

        buffer.x = i;
        buffer.y = o;
        buffer.w = size.width;
        buffer.h = size.height;

        array[n] = buffer;

        i += size.width;
        if (n == 10 || n == 20 || n == 30) {
            o += size.height;
            alert(buffer.x + "x" + buffer.y + " wh: " + buffer.w + "x" + buffer.h);
        }
    }

    return array;
}

function gioco_inizio() {

    var mazzo = inizializza_mazzo("risorse/img/pc_carte.jpg");

    canvas_RAW_GeneraFiguraRitaglio("risorse/img/pc_carte.jpg", mazzo[1].x, mazzo[1].y, mazzo[1].w, mazzo[1].h, 0, 0, mazzo[1].w, mazzo[1].h);

    //alert(mazzo[1].x + "x" + mazzo[1].y + " wh: " + mazzo[1].w + "x" + mazzo[1].h);
    console.log("quantità mazzo: " + mazzo.length);
    return;
}
