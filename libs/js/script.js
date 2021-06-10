import { luxyInit } from './components/luxyInit.js';
import { logoAnimation } from './components/logoAnimation.js';
import { hamburgerMenu } from './components/hamburgerMenu.js';
import { linearGroup } from './components/linearGroup.js';
import { linearDesign } from './components/linearDesign.js';
import { linearBuilding } from './components/linearBuilding.js';
import { linearFire } from './components/linearFire.js';
import { linearProject } from './components/linearProject.js';

$(window).load(function() {
    luxyInit();
    logoAnimation();
})

hamburgerMenu();
linearGroup();
linearDesign();
linearBuilding();
linearFire();
linearProject();