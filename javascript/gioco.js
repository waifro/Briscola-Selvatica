function raw_carta() {

    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;

    return this;
}

function raw_imagesize(pathname) {
    this.w = 0;
    this.h = 0;

    let img = new Image();
    img.src = pathname;

    img.onload = function() {
        this.w = img.width;
        this.h = img.height;
        console.log("w: " + this.w);
        console.log("h: " + this.h);
    }

    return this;
}

function inizializza_mazzo(pathname) {

    var size = raw_imagesize(pathname);
    
    if (size.w == 0 && size.h == 0) return;

    var array = [];

    var foo = size.width / 10;
    var bar = size.height / 4;   

    var i, o;

    for (var n = 0; n < 40; n++) {

        buffer = new raw_carta();

        buffer.x = i;
        buffer.y = o;
        buffer.w = size.w;
        buffer.h = size.h;

        array[n] = buffer;

        i += size.w;
        if (n == 10 || n == 20 || n == 30) {
            o += size.h;
            alert(buffer.x + "x" + buffer.y + " wh: " + buffer.w + "x" + buffer.h);
        }
    }

    return array;
}

function gioco_inizio() {

    var mazzo = inizializza_mazzo("risorse/img/pc_carte.jpg");

    canvas_RAW_GeneraFigura("risorse/img/poker_background.jpg", 0, 0, canvas.width, canvas.height);

    //alert(mazzo[1].x + "x" + mazzo[1].y + " wh: " + mazzo[1].w + "x" + mazzo[1].h);
    console.log("quantità mazzo: " + mazzo.length);
    return;
}
