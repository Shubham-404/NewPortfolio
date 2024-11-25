// let tl = gsap.from()

gsap.from("#text h1", {
    y: 100,
    color: "black",
    opacity: 0,
    duration: 1, 
    stagger: 1,

})
gsap.from("#text2 h2", {
    y: 100,
    color: "black",
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: "main",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 20%",
        scrub: 4,
    }
})