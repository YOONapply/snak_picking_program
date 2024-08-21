// document.addEventListener("DOMContentLoaded", function() {
// });


let ranArr = [];

// const deg = document.querySelector(`snak${}`);
// const keyFrames = document.createElement("style");

// keyFrames.innerHTML = `
//   @keyframes loading {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }

//   .loading {
//     animation: loading 1s ease infinite;
//   }
// `;

// loading.appendChild(keyFrames);

while (true) {
    let x = Math.floor(Math.random() * 5);
    while (true) {
        if (x == ranArr[0] || x == ranArr[1]) x = Math.floor(Math.random() * 5);
        else break;
    }
    ranArr.push(x)
    if (ranArr.length == 3) break;
}
console.log(ranArr)





let count = 0;
var arr = ["사탕", "초콜릿", "과자", "젤리", "아이스크림"];
// ranArr.push(1)
// console.log(ranArr);
// var copy_arr = arr;

const img = new Image();
img.src = "images/card_img.jpg";

const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3")

image1.onclick = function () {
    snak1 = ranArr[0];
    console.log(snak1)
    document.getElementById("snak1").innerHTML += arr[snak1];
    document.getElementById("img1").remove();
}

image2.onclick = function () {
    snak2 = ranArr[1];
    console.log(snak2)
    document.getElementById("snak2").innerHTML += arr[snak2];
    document.getElementById("img2").remove();
}

image3.onclick = function () {
    snak3 = ranArr[2];
    console.log(snak3)
    document.getElementById("snak3").innerHTML += arr[snak3];
    document.getElementById("img3").remove();
}






document.getElementById("all-check").onclick = function () {

}

document.getElementById("reset").onclick = function () {
    ranArr.length = 0;

    while (true) {
        let x = Math.floor(Math.random() * 5);
        while (true) {
            if (x == ranArr[0] || x == ranArr[1]) x = Math.floor(Math.random() * 5);
            else break;
        }
        ranArr.push(x)
        if (ranArr.length == 3) break;
    }
    console.log(ranArr)

    document.getElementById("snak1").textContent = "";
    document.getElementById("snak2").textContent = "";
    document.getElementById("snak3").textContent = "";

    document.getElementById("snak1").appendChild(image1);
    document.getElementById("snak2").appendChild(image2);
    document.getElementById("snak3").appendChild(image3);
}




// image1.onclick = function() {
//     if (arr.length > 0) {
//         let snak1 = Math.floor(Math.random() * arr.length);
//         console.log(snak1)
//         document.getElementById("snak1").innerHTML += arr[snak1];
//         document.getElementById("img1").remove();
//         arr.splice(snak1);

//     } else {
//         document.getElementById("snak1").innerHTML = "No more items";
//         console.log(snak1)
//     }
// }

// image2.onclick = function() {
//     if (arr.length > 0) {
//         let snak2 = Math.floor(Math.random() * arr.length);
//         console.log(snak2)
//         document.getElementById("snak2").innerHTML += arr[snak2];
//         document.getElementById("img2").remove();
//         arr.splice(snak2);

//     } else {
//         document.getElementById("snak2").innerHTML = "No more items";
//         console.log(snak2)
//     }
// }

// image3.onclick = function() {
//     if (arr.length > 0) {
//         let snak3 = Math.floor(Math.random() * arr.length);
//         console.log(snak3)
//         document.getElementById("snak3").innerHTML += arr[snak3];
//         document.getElementById("img3").remove();
//         arr.splice(snak3);

//     } else {
//         document.getElementById("snak3").innerHTML = "No more items";
//         console.log(snak3)
//     }
// }