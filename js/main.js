console.log('JS is running...');

import {progressBarData} from './data/progressBarData.js';
import {renderProgressBar} from './components/progress-bar/renderProgressBar.js';
import {renderSocials} from './components/socials/renderSocials.js';
import {socialsData} from './data/socialsData.js';


console.log(renderProgressBar);

renderProgressBar('.left', progressBarData);

renderSocials('fiiter > .row-long',socialsData);