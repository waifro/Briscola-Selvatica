function rect() {

    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;

    return this;
}

function delay(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, time);
    });
}

function preload_image(url) {
    var img = new Image();
    img.src = url;

    img.onload = function() {
        return img;
    }

    return img;
}

async function inizializza_mazzo(pathname) {

    let result = preload_image(pathname);
    let count = 0;

    /* let load the image */
    while (result.complete != true) {

        // if more then 5 secs already passed, exit
        if (++count > 5) return true;

        await delay(1000);
        console.log("loading");
    }

    console.log("size img: " + result.width + "x" + result.height);
    
    var array = new Array();
    var buffer;
    
    var foo = result.width / 10;
    var bar = result.height / 4;   
    
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

}

async function gioco_inizio() {

    // background
    //canvas_RAW_GeneraFigura("risorse/img/poker_background.jpg", 0, 0, 500, 500);

    var mazzo = await inizializza_mazzo("risorse/img/pc_carte.jpg");

    canvas_RAW_GeneraFiguraRitaglio("risorse/img/pc_carte.jpg", mazzo[0].x, mazzo[0].y, mazzo[0].w, mazzo[0].h, 0, 0, 100, 100);

    console.log(mazzo.length);
    return;
}
