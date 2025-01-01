let time = gsap.timeline({
    repeat:-1
})


time.to(".img", {
    ease: Expo.easeInOut,
    width:"100%",
    duration:2,
    stagger:2

},"a").to(".text h1", {
    delay:0.5,
    ease : Expo.easeInOut,
    stagger:2,
    top:"0%"

},"a").to(".text h1", {
    delay:2,
    ease : Expo.easeInOut,
    stagger:2,
    top:"-200%"

}, "a")
.to(".bar", {
    delay:0.5,
    ease : Expo.easeInOut,
    stagger:2,
    top:"0%"

},"a").to(".bar", {
    delay:2,
    ease : Expo.easeInOut,
    stagger:2,
    top:"200%"

}, "a")