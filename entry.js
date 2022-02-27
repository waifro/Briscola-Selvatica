
/* funzioni */

var window_w = innerWidth;
var window_h = innerHeight;

function controlla_dispositivo() {

    /* Storing user's device details in a variable*/
    let details = navigator.userAgent;
  
    /* Creating a regular expression 
    containing some mobile devices keywords 
    to search it in details string*/
    let regexp = /android|iphone|kindle|ipad/i;

    /* Using test() method to search regexp in details
    it returns boolean value*/
    let isMobileDevice = regexp.test(details);

    if (isMobileDevice) {
        alert("stai usando un dispositivo mobile");
        return true;
    }

    return false;
}

function entry_init() {
    
    // verifichiamo che non si stia utilizzando un dispositivo mobile
    //if (controlla_dispositivo() == true) return;

    console.log("window.x " + window_w);
    console.log("window.h " + window_h);

    gioco_inizio();

}


//var mazzo [] 