var x = 5;
var y = 7;
var z = x + y;

//console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;

//console.log(C);

function sumnPrint(x1,x2) {
var result = x1 + x2;
//console.log(result);
}

//sumnPrint(x, y);
//sumnPrint(A, B);

if (C.length > z) {
    //console.log(C)
    if (C.length < z) {
        //console.log(z)
    }
} else {
    //console.log("good job!")
}

var L1 = ["Watermelon","Pineapple","Pear","Banana"];
var L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(array) {
    var i
    for (i=0; i<array.length; i++) {

        if (array[i] == "Banana"){
            alert("Banana found!");
        }
    }

}

//findTheBanana(L1);
//findTheBanana(L2);

function findTheBanana2(array) {
    array.forEach(checkifBanana)

    function checkifBanana(item){
        if (item == "Banana"){
            alert("Banana found!");
        }
    }
}

//findTheBanana2(L1);
//findTheBanana2(L2);


var now = new Date();
var hour = now.getHours();

function greeting(h) {

    var greet = document.getElementById("greeting");

    if (greet !== null) {
        if (h < 5 || h >= 20) {
            greet.innerHTML = "Good night! Welcome to MonoMuse.";

        } else if (h < 12) {
            greet.innerHTML = "Good morning! Welcome to MonoMuse.";

        } else if (h < 18) {
            greet.innerHTML = "Good afternoon! Welcome to MonoMuse.";

        } else {
            greet.innerHTML = "Good evening! Welcome to MonoMuse.";
        }
    }
}

greeting(hour);


function addYear() {
    var year = document.getElementById("copyYear");

    if (year !== null) {
        var currentYear = new Date().getFullYear();
        year.innerHTML = "© " + currentYear + " MonoMuse. All rights reserved."
    }

}
