gsap.from(".first-line",{
    y:50,
    duration:0.5,
    delay:0.3
})
gsap.from(".second-line",{
    y:75,
    duration:0.5,
    delay:0.3
})
gsap.from(".third-line",{
    y:100,
    duration:0.5,
    delay:0.3
})

var ball=document.querySelector(".ball");
document.addEventListener('mousemove',(e)=>{
    console.clear();
    ball.style.cssText="left :"+(e.pageX - 5) +"px; top:"+(e.pageY-5)+"px;";
    console.log("x="+e.clientX);
    console.log("y="+e.clientY);

    });

