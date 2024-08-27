// document.addEventListener("DOMContentLoaded", function() {
// });


let ranArr = [];



while (true) {
    let x = Math.floor(Math.random() * 4);
    while (true) {
        if (x == ranArr[0] || x == ranArr[1]) x = Math.floor(Math.random() * 4);
        else break;
    }
    ranArr.push(x)
    if (ranArr.length == 3) break;
}
console.log(ranArr)





let count = 0;
var arr = ["작은 꾸러미", "큰 꾸러미", "작은 꾸러미 2개!", "젤리", "아이스크림"];
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

    const snakElement1 = document.getElementById("snak1");
    // 애니메이션을 적용
    const animation = snakElement1.animate(
        [
            // keyframes
            {transform: "translate(-23vw, -50vh)"},
            { transform: "translate(-23vw, -60vh) rotateY(720deg)" },
            { transform: "translate(-23vw, -60vh) rotateY(360deg)" },
            {transform: "translate(-23vw, -50vh)"},
        ],
        {
            // options
            duration: 3000,
            iterations: 1,
        }
    );

    animation.finished.then(() => {
        // 애니메이션이 완료된 후 2초 기다림
        setTimeout(() => {
            // 이미지 삭제
            document.getElementById("img1").remove();
            // `snak3` 요소에 내용 추가
            document.getElementById("snak1").innerHTML += arr[snak1];
        }, 80); // 2000 밀리초 = 2초
    }).catch(error => {
        console.error('애니메이션 완료 확인 중 오류 발생:', error);
    });
}

image2.onclick = function () {
    snak2 = ranArr[1];
    console.log(snak2)

    const snakElement2 = document.getElementById("snak2");
    // 애니메이션을 적용
    const animation = snakElement2.animate(
        [
            // keyframes
            {transform: "translate(0, -50vh)"},
            { transform: "translate(0, -60vh) rotateY(720deg)" },
            { transform: "translate(0, -60vh) rotateY(360deg)" },
            {transform: "translate(0, -50vh)"},
        ],
        {
            // options
            duration: 3000,
            iterations: 1,
        }
    );

    // 애니메이션이 완료되면 이미지 삭제
    animation.finished.then(() => {
        // 애니메이션이 완료된 후 2초 기다림
        setTimeout(() => {
            // 이미지 삭제
            document.getElementById("img2").remove();
            // `snak3` 요소에 내용 추가
            document.getElementById("snak2").innerHTML += arr[snak2];
        }, 80); // 2000 밀리초 = 2초
    }).catch(error => {
        console.error('애니메이션 완료 확인 중 오류 발생:', error);
    });
}

image3.onclick = function () {
    snak3 = ranArr[2];
    console.log(snak3);

    const snakElement3 = document.getElementById("snak3");

    // 애니메이션을 적용
    const animation = snakElement3.animate(
        [
            // keyframes
            {transform: "translate(23vw, -50vh)"},
            { transform: "translate(23vw, -60vh) rotateY(720deg)" },
            { transform: "translate(23vw, -60vh) rotateY(360deg)" },
            {transform: "translate(23vw, -50vh)"},
        ],
        {
            // options
            duration: 3000,
            iterations: 1,
            
        }
    );

    animation.finished.then(() => {
        // 애니메이션이 완료된 후 2초 기다림
        setTimeout(() => {
            // 이미지 삭제
            document.getElementById("img3").remove();
            // `snak3` 요소에 내용 추가
            document.getElementById("snak3").innerHTML += arr[snak3];
        }, 80); // 2000 밀리초 = 2초
    }).catch(error => {
        console.error('애니메이션 완료 확인 중 오류 발생:', error);
    });
}






let gameStart = document.getElementById("game-start-btn");

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


document.getElementById("home-btn").onclick = function(){
    document.getElementById("test").append(gameStart);
    location.reload();//새로고침하는 코드
}

const del = "game-start-btn";
document.getElementById("start").onclick = function(){
    gameStart.remove()
}

let corrent = 0

document.getElementById("all-check").onclick = function(){
    if(corrent >= 0){
        document.getElementById('snak1').style.animationPlayState = 'running';
        document.getElementById('snak2').style.animationPlayState = 'running';
        document.getElementById('snak3').style.animationPlayState = 'running';
        corrent += 1
    }
}

