import { removeSecondaryLinks } from '../helper.js';
import { addSecondaryLinks } from '../helper.js';

var links = ["About", "Projects", "People", "News", "Careers", "Contact"];

function linearDesign() {

    $('#linear-design').mouseenter(function() {

        gsap.to(".menu", { duration: .5, background: "linear-gradient(90deg, #9f452d, #c25436)" });
        removeSecondaryLinks('#menu-secondary-links');
        addSecondaryLinks(links);

    })
}

export { linearDesign };