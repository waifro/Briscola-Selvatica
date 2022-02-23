
/* funzioni */

var window_w = innerWidth;
var window_h = innerHeight;

function entry_init() {
    
    console.log("window.x " + window_w);
    console.log("window.h " + window_h);

    gioco_inizio();

    canvas_RAW_GeneraFigura("risorse/img/pc_carte.jpg", 50, 50, 50, 50);

}


//var mazzo [] 