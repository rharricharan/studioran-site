document.addEventListener('DOMContentLoaded', function() {
    let splitText;

    function runSplit() {
        splitText = new SplitType("[stagger-link-text]", {
            types: "words, chars"
        });

        const staggerLinks = document.querySelectorAll(".stagger-link"); // Make sure the class is used instead of id
        staggerLinks.forEach((link) => {
            const letters = link.querySelectorAll(".stagger-link-text .char");

            link.addEventListener("mouseenter", function () {
                gsap.to(letters, {
                    yPercent: -100,
                    duration: 0.5,
                    ease: "power4.inOut",
                    stagger: { each: 0.03, from: "start" },
                    overwrite: true
                });
            });

            link.addEventListener("mouseleave", function () {
                gsap.to(letters, {
                    yPercent: 0,
                    duration: 0.4,
                    ease: "power4.inOut",
                    stagger: { each: 0.03, from: "random" }
                });
            });
        });
    }

    runSplit();

    // Update on window resize to adjust SplitType
    let windowWidth = window.innerWidth;
    window.addEventListener("resize", function () {
        if (windowWidth !== window.innerWidth) {
            windowWidth = window.innerWidth;
            splitText.revert();
            runSplit();
        }
    });
});
