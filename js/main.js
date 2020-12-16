console.log('JS is running...');

import {progressBarData} from './data/progressBarData.js';
import {renderProgressBar} from './components/progress-bar/renderProgressBar.js';


console.log(renderProgressBar);

renderProgressBar('.left', progressBarData);