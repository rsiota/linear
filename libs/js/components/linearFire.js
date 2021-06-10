import { removeSecondaryLinks } from '../helper.js';
import { addSecondaryLinks } from '../helper.js';

var links = ["About", "Services", "People", "News", "Careers", "Contact"];

function linearFire() {

    $('#linear-fire').mouseenter(function() {
        gsap.to(".menu", { duration: .5, background: "linear-gradient(90deg, #79161e, #a51e29)" });
        removeSecondaryLinks('#menu-secondary-links');
        addSecondaryLinks(links);
    })

}

export { linearFire };