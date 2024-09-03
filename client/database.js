
let past_num = "";
let num = "";
let msg = document.getElementById('msg');
let message = new Typed(msg, {
    startDelay: 0,
    strings: [''],
    typeSpeed: 5,
    backSpeed: 0,
    fadeOut: true,
});

const firebaseConfig = {
    apiKey: "AIzaSyBCM30dzmjIothg9SmLV32i9BROyvZbXqk",
    authDomain: "words-nowhere-to-go.firebaseapp.com",
    databaseURL: "https://words-nowhere-to-go-default-rtdb.firebaseio.com",
    projectId: "words-nowhere-to-go",
    storageBucket: "words-nowhere-to-go.appspot.com",
    messagingSenderId: "867012400062",
    appId: "1:867012400062:web:f2d7ad6250d9d6d3221fef",
    measurementId: "G-FBJ3E6X8MD"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


let timer = setInterval(function () {
    num = document.getElementById('num');
    if (past_num != num.innerHTML) {
        database.ref("/" + num.innerHTML[6]+num.innerHTML[7]).once('value', function (snapshot) {
            if (snapshot.val() != null) {
                var data = snapshot.val();
                console.log(data);
                msg.innerHTML = "";
                message.destroy();

                // deal with firebase message
                let new_data = '';
                for(let i=0; i<data.length; i++){
                    new_data += i+". <br>";
                    new_data += data[ data.length - i - 1];
                    new_data += "<br><br>"
                }

                message = new Typed(msg, {
                    startDelay: 0,
                    strings: [new_data],
                    typeSpeed: 5,
                    backSpeed: 0,
                    fadeOut: true,
                    onComplete: (self) => {
                        self.destroy();
                        msg.innerHTML = new_data;
                    },
                });
            }
        });
        past_num = num.innerHTML;
        console.log(past_num);

    }
}, 5000);