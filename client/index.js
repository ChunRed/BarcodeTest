state = 0;
let MSG;
let flag = true;

function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    //console.log(`Code matched = ${decodedText}`, decodedResult);
    MSG.innerHTML = decodedText;
    //document.getElementById('num').innerHTML = decodedText;
    
}

function onScanFailure(error) {
    if(flag){
        setTimeout(() => {

            let msg = document.getElementById('qr-shaded-region');
            
            MSG = document.createElement('div');
            msg.appendChild(MSG);

            MSG.innerHTML = 'Please use your phone to scan the hidden one-dimensional barcodes in your surroundings, discover the messages concealed behind them, and leave your own personal words.';
            MSG.id = 'num';
            MSG.classList.add("m-3","text-light");
            MSG.style.fontFamily = "Overpass Mono";
            MSG.style.fontSize = "12px";
        
        }, 500);
        flag = false;
    }
    
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { 
        fps: 10, 
        qrbox: { width: window.innerWidth-30, height: 160 }
    },

    /* verbose= */ false);


html5QrcodeScanner.render(onScanSuccess, onScanFailure);

setInterval(() => {
    if (document.getElementById('html5-qrcode-button-camera-stop').style.display != 'none'){
        
    }
    else{
        flag = true;
    }
    
    
}, 500);



