import { removeSecondaryLinks } from '../helper.js';
import { addSecondaryLinks } from '../helper.js';

var links = ["About", "Projects", "People", "News", "Careers", "Contact"];

function linearBuilding() {

    $('#linear-building').mouseenter(function() {
        gsap.to(".menu", { duration: .5, background: "linear-gradient(90deg, #0d5042, #128a73)" });
        removeSecondaryLinks('#menu-secondary-links');
        addSecondaryLinks(links);
    })
}

export { linearBuilding };