var x = 5;
var y = 7;
var z = x + y;

console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;

console.log(C);

function sumnPrint(x1,x2) {
var result = x1 + x2;
console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C)
    if (C.length < z) {
        console.log(z)
    }
} else {
    console.log("good job!")
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


function findTheBanana2(array) {
    array.forEach(checkifBanana)

    function checkifBanana(item){
        if (item == "Banana"){
            alert("Banana found!");
        }
    }
}

findTheBanana2(L1);
findTheBanana2(L2);
