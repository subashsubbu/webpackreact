import React, {Component} from 'react'
import { ExperimentWindow } from 'jspsych-react';
import { timelineFactory } from './timeline';
import callbackImageKeyboardResponsePlugin from './callbackImageKeyboardResponsePlugin';

// export default class Experiment extends Component {
//   callback = (targetID) => console.log(targetID);
//   timeline = timelineFactory(callback);
  
//   render() {
   
//     return (
//       <div>
//         {/* <ExperimentWindow
//           settings={{ timeline }}
//           plugins={{ callbackImageKeyboardResponsePlugin }}
//         /> */}
//       </div>
//     );
//   }
// }


const callback = (targetID) => console.log(targetID);
const timeline = timelineFactory(callback);

export function Experiment() {


    return (
        <div>
            <ExperimentWindow
                settings={{ timeline }}
                // plugins={{ callbackImageKeyboardResponsePlugin }}
            />

        </div>
    )
}


