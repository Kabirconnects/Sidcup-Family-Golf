const cursor = document.querySelector("#cursor")
const blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",(dests) => {
    cursor.style.left = dests.x+"px"
    cursor.style.top = dests.y+"px"
    blur.style.left = dests.x - 200 +"px"
    blur.style.top = dests.y - 200 +"px"
})

const h4 = document.querySelectorAll("#nav h4");
h4.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(3)";
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent"; // Ensure green disappears
    });

    elem.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        cursor.style.border = "none"; // Ensure no border
        cursor.style.backgroundColor = "#95C11E"; // Reset to green
    });
});

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:"top -80%",
        scrub:1
    }
})

gsap.from("#About-us img,#About-us-in",{
    y:50,
    opacity:0,
    duration:1,
    Stagger:0.4,
    scrollTrigger:{
        trigger:"#About-us",
        scroller: "body",
        // markers:true,
        start:"top 60%",
        end: "top 58%",
        scrub:3,
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    Stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller: "body",
        // markers:true,
        start:"top 70%",
        end: "top 65%",
        scrub:2,
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    duration:1,
    Stagger:0.1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        // markers:true,
        start:"top 70%",
        end: "top 47%",
        scrub:2,
    }
})

gsap.from("#colon2",{
    y:+70,
    x:+70,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        // markers:true,
        start:"top 70%",
        end: "top 47%",
        scrub:2,
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end: "top 70%",
        scrub:3,
    }
})

