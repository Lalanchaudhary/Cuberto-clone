gsap.from(".first-line", {
    y: 50,
    duration: 0.5,
    delay: 0.3
})
gsap.from(".second-line", {
    y: 75,
    duration: 0.5,
    delay: 0.3
})
gsap.from(".third-line", {
    y: 100,
    duration: 0.5,
    delay: 0.3
})

var ball = document.querySelector(".ball");
var icon = document.querySelector(".icon1");
document.addEventListener('mousemove', (e) => {
    console.clear();
    ball.style.cssText = "left :" + (e.pageX - 5) + "px; top:" + (e.pageY - 5) + "px;";
    let x = e.clientX;
    let y = e.clientY;
    console.log("x=" + e.pageX);
    console.log("y=" + e.pageY);
    if (y > 35 && y < 77 && x > 1364 && x < 1402) {
        ball.classList.add("ball2");
        icon.classList.add("icon2");
        ball.style.cssText = "left :" + (e.pageX - 25) + "px; top:" + (e.pageY - 25) + "px;";
        console.log("okay");
    }
    else {
        // ball.cssText="height :"+(10)+ "px; width :"+(10)+"px;" 
        ball.classList.remove("ball2");
        icon.classList.remove("icon2");
        console.log("no");
    }
    if (e.pageY > 2140) {
        ball.style.backgroundColor = "white";
        icon.style.color = "white"
        if (y > 35 && y < 77 && x > 1364 && x < 1402) {
            icon.style.color="black";
        }

    }

});

