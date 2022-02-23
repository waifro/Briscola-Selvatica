function raw_carta() {

    this.x1 = 0;
    this.x2 = 0;
    this.y1 = 0;
    this.y2 = 0;
    this.w1 = 0;
    this.w2 = 0;
    this.h1 = 0;
    this.h2 = 0;

    return this;
}

function inizializza_mazzo() {
    
    var array = [];

    for (var n = 0; n < 40; n++) {

        buffer = new raw_carta();
        array[n] = buffer;
    }

    return array;
}

function gioco_inizio() {

    var mazzo = inizializza_mazzo();

    console.log("quantità mazzo: " + mazzo.length);
    return;
}
