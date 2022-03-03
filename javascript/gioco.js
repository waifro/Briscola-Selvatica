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

function loop(interval, n) {
    
    if (n == 10) {
        clearInterval(interval);
        interval = null;
        return;
    }

    n++;
    console.log("count: " + n);
    //setInterval(loop(interval, n), 1000);
}

function keyDown(e) {

    if (e.KeyCode == 38) alert("keycode alerted");

}

function keyPresses() {
    window.addEventListener("keydown", keyDown, false);
    
}

async function gioco_inizio() {

    // background
    //canvas_RAW_GeneraFigura("risorse/img/poker_background.jpg", 0, 0, 500, 500);

    let mazzo = await inizializza_mazzo("risorse/img/pc_carte.jpg");
    if (mazzo == true) return;
    
    let count = 0;

    while (keyPresses) {
        await delay(1000);
        if (count == 10) break;

        count++;
        console.log("count: " + count);
    }

    return;
}
