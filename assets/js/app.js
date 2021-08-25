gsap.to("#logo", {
    duration: 1, y: -150
});

gsap.to("#info-text", {
    duration: 1,
})

const body = document.getElementsByTagName("body")
body.addEventListener("scrollEnd", () => alert("scrolling ended!"));
