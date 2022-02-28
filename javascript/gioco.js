function rect() {

    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;

    return this;
}

function image_rect(pathname) {
    
    var img = new Image();
    img.src = pathname;

    img.onload = function() {
        this.w = img.width;
        this.h = img.height;
    }

    return img;
}

function delay(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, time);
    });
}

async function inizializza_mazzo(pathname) {

    var size = loadImage("risorse/img/pc_carte.jpg", function() {

        while (size.complete != true) {
            await delay(1000);
            console.log("loading");
        }
    
        console.log("size img: " + size.x + "x" + size.y);
    
        var array = new Array();
        var buffer;
    
        var foo = size.width / 10;
        var bar = size.height / 4;   
    
        var i = 0;
        var o = 0;
    
        for (var n = 0; n < 40; n++) {
    
            buffer = new rect();
    
            buffer.x = i;
            buffer.y = o;
            buffer.w = foo;
            buffer.h = bar;
    
            array[n] = buffer;
    
            i += foo;
            if (n == 10 || n == 20 || n == 30) {
                i = 0;
                o += bar;
                //alert(buffer.x + "x" + buffer.y + " wh: " + buffer.w + "x" + buffer.h);
            }
        }
    
        return array;

    });// image_rect(pathname);
}

function gioco_inizio() {

    //background
    //canvas_RAW_GeneraFigura("risorse/img/poker_background.jpg", 0, 0, 500, 500);

    var mazzo = inizializza_mazzo("risorse/img/pc_carte.jpg");

    delay(1000);
    //loadImage("risorse/img/pc_carte.jpg");

    canvas_RAW_GeneraFiguraRitaglio("risorse/img/pc_carte.jpg", 0, 0, mazzo[0].w, mazzo[0].h);

    console.log(mazzo.length);
    return;
}
