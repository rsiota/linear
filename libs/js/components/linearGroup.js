import { removeSecondaryLinks } from '../helper.js';
import { addSecondaryLinks } from '../helper.js';

var links = ["Companies", "About", "Team", "Clients", "News", "Accreditations", "Careers", "Contact"];

function linearGroup() {

    $('#linear-group').mouseenter(function() {
        gsap.to(".menu", { duration: .5, background: "linear-gradient(90deg, #000, #000" });
        removeSecondaryLinks('#menu-secondary-links');
        addSecondaryLinks(links);
    })
}


export { linearGroup };