import { removeSecondaryLinks } from '../helper.js';
import { addSecondaryLinks } from '../helper.js';

var links = ["About", "Projects", "Products", "Clients", "People", "News", "Careers", "Contact"];

function linearProject() {

	$('#linear-project').mouseenter(function() {
    gsap.to(".menu", { duration: .5, background: "linear-gradient(90deg, #1d4a6a, #368cca)"});
        removeSecondaryLinks('#menu-secondary-links');
        addSecondaryLinks(links);
	})
}

export { linearProject };