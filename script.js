gsap.from(".first-line", {
    y: 50,
    duration: 0.5,
    delay: 0.3,
    opacity:0,
})
gsap.from(".second-line", {
    y: 75,
    duration: 0.5,
    delay: 0.3,
    opacity:0,
})
gsap.from(".third-line", {
    y: 100,
    duration: 0.5,
    delay: 0.3,
    opacity:0,
})
 
var ball = document.querySelector(".ball");
var icon = document.querySelector(".icon1");
document.addEventListener('mousemove', (e) => {
    // console.clear();
    ball.style.cssText = "left :" + (e.pageX - 5) + "px; top:" + (e.pageY - 5) + "px;";
    let x = e.clientX;
    let y = e.clientY;

    if (y > 35 && y < 77 && x > 1364 && x < 1402) {
        ball.classList.add("ball2");
        icon.classList.add("icon2");
        ball.style.cssText = "left :" + (e.pageX - 25) + "px; top:" + (e.pageY - 25) + "px;";
        // console.log("okay");
    }
    else {
        ball.classList.remove("ball2");
        icon.classList.remove("icon2");
    }
    if (e.pageY > 2140) {
        ball.style.backgroundColor = "white";
        icon.style.color = "white"
        if (y > 35 && y < 77 && x > 1364 && x < 1402) {
            icon.style.color="black";
        }

    }

});
let index=0;
let side=document.querySelector(".side-bar");
    document.querySelector(".icon1").addEventListener('click', function() {
       side.classList.add("side-bar2")
        index++;
    });
    document.querySelector(".side-icon").addEventListener('click', function() {
        // side.style.width="0";
        side.classList.remove("side-bar2")
        index++;
    });
side.addEventListener("mousemove",(e)=>{
    console.clear();
    let x=e.pageX;
    let y=e.pageY;
    if (y > 170 && y < 480 && x > 1000 && x < 1090) {
        ball.classList.add("ball2");
        // icon.classList.add("icon2");
        ball.style.cssText = "left :" + (e.pageX - 25) + "px; top:" + (e.pageY - 25) + "px;";
        console.log("okay");
    }
    else {
        console.log("no");
        ball.classList.remove("ball2");
        // icon.classList.remove("icon2");
    }
    console.log("x="+x);
    console.log("y="+y);
})
    let list=document.querySelector(".list");
    let links=document.querySelector(".links");
    list.addEventListener("click",function(){
        links.style.color="red";
    list.classList.add("lik")
    console.log("jaya ji");
    })
let film1=document.querySelector(".f1-elem");
film1.addEventListener("click",function(){
    console.log("okay");
    Element.setAttribut("autoplay","");
})

//....................New added in github................

// document.addEventListener('mousemove', (e) => {
//     // console.clear();
//     ball.style.cssText = "left :" + (e.pageX - 5) + "px; top:" + (e.pageY - 5) + "px;";
//     let x = e.clientX;
//     let y = e.clientY;

//     if (y > 35 && y < 77 && x > 1364 && x < 1402) {
//         ball.classList.add("ball2");
//         icon.classList.add("icon2");
//         ball.style.cssText = "left :" + (e.pageX - 25) + "px; top:" + (e.pageY - 25) + "px;";
//         // console.log("okay");
//     }
//     else {
//         ball.classList.remove("ball2");
//         icon.classList.remove("icon2");
//     }
//     if (e.pageY > 2140) {
//         ball.style.backgroundColor = "white";
//         icon.style.color = "white"
//         if (y > 35 && y < 77 && x > 1364 && x < 1402) {
//             icon.style.color="black";
//         }

//     }

// });