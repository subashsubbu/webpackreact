import jsPsych from "jspsych";
import callbackImageKeyboardResponsePlugin, {
    jspsychReact,
} from "jspsych-react";


const post_trial_gap = function () {
    return Math.floor(Math.random() * jitter) + iti;
};

// Experiment parameters
const trial_duration = 300;
const stim_duration = 200;
const iti = 300;
const jitter = 200;
const n_trials = 10;
const prob = 0.15;
const plugin_name = callbackImageKeyboardResponsePlugin;

  
export function timelineFactory(callback) {
    const start_callback = function () {
        callback("start");
    };
    const target_callback = function () {
        callback("target");
    };
    const nontarget_callback = function () {
        callback("nontarget");
    };
    const stop_callback = function () {
        callback("stop");
    };

    // jspsych is in the node_modules
    const base_path = "/src/images/";
    let targets = [];
    ///Users/jamesvlasak/jspsych_react_picturetask/src/static
    //targets = targets.map(target => `${base_path}${target}`);

    var imageNumber;
    var fileName;
    var toPush;
    for (var i = 0; i < 20; i++) {
        imageNumber = Math.floor(Math.random() * (901 - 1) + 1);

        if (imageNumber <= 9) {
            fileName = "src/static/00000" + imageNumber + ".jpg";
            toPush = { stimulus: fileName };
        } else if (imageNumber > 9 && imageNumber <= 99) {
            fileName = "src/static/0000" + imageNumber + ".jpg";
            toPush = { stimulus: fileName };
        } else {
            fileName = "src/static/000" + imageNumber + ".jpg";
            toPush = { stimulus: fileName };
        }
        if (targets.includes(toPush)) {
            i -= 1;
            continue;
        }
        targets.push(toPush);
    }

    // Create timeline
    const timeline = [];

    const welcome_block = {
        type: "callback-html-keyboard-response",
        stimulus: "The exercise will start in 5 seconds...",
        choices: jsPsych.NO_KEYS,
        trial_duration: 5000 
        // on_start: start_callback
    };
    timeline.push(welcome_block);

    const test_trials = {
        stimulus: "stimulus",
        type: "callbackImageKeyboardResponsePlugin",
        timeline: targets,
        // on_start: function () {
        //     let x = JSON.stringify(this.stimulus);
        //     const stimulusId = x.slice(13, 18);
        //     console.log({ stimulusId });
        //     notion.addMarker(stimulusId);
        // },
        on_start: function () {
            console.log(this)
        },
        trial_duration: function () {
            return jsPsych.randomization.sampleWithoutReplacement(
                [250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750],
                1
            )[0];
        },
    };

    timeline.push(test_trials);

    // const fixation = {
    //   type: "callbackImageDisplay",
    //   stimulus: "./images/fixation.png",
    //   stimulus_duration: stim_duration,
    //   trial_duration: () => params.iti + Math.random() * params.jitter,
    //   post_trial_gap: post_trial_gap(),

    // }
    // timeline.push(fixation);

    const end_block = {
        type: "callback-html-keyboard-response",
        stimulus: "Thanks for participating!",
        post_trial_gap: 500,
        on_start: stop_callback,
    };

    timeline.push(end_block);

    return timeline;
}
