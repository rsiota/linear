function hamburgerMenu() {

    $('#hamburger-icon').click(function() {
        if ($(this).hasClass('closed')) {
            $(this).removeClass('closed');
            openMenu();
        } else {
            $(this).addClass('closed');
            closeMenu();
        }
    })

}

function openMenu() {

    gsap.to(".hamburger-line-top", { duration: .35, rotationZ: -45, y: 11, scaleX: 1.1 });
    gsap.to(".line-top-left", { duration: .35, background: "white" });
    gsap.to(".line-top-right", { duration: .35, background: "white" });
    gsap.to(".hamburger-line-medium", { duration: .1, opacity: 0 });
    gsap.to(".hamburger-line-bottom", { duration: .35, rotationZ: 45, y: -11, scaleX: 1.1, background: "white" });
    gsap.to(".menu", { duration: .35, display: "flex", opacity: 1 });
}

function closeMenu() {
    gsap.to(".hamburger-line-top", { duration: .35, rotationZ: 0, y: 0, scaleX: 1 });
    gsap.to(".line-top-left", { duration: .35, background: "black" });
    gsap.to(".line-top-right", { duration: .35, background: "black" });
    gsap.to(".hamburger-line-medium", { duration: .25, opacity: 1 });
    gsap.to(".hamburger-line-bottom", { duration: .35, rotationZ: 0, y: 0, scaleX: 1, background: "black" });

    var tl = new TimelineMax({ onComplete: hideMenu });
    tl.to(".menu", { duration: .35, display: "flex", opacity: 0 })

    function hideMenu() {
    	gsap.to(".menu", { display: "none"});
    }
}

export { hamburgerMenu };