import React, { Component } from 'react'
import {ExperimentWindow} from 'jspsych-react';
import { timelineFactory } from './timeline';
import callbackImageKeyboardResponsePlugin from './callbackImageKeyboardResponsePlugin';
import { LoginForm } from './LoginForm'

export function Experiments() {
  const callback = (targetID) => console.log(targetID);
  const timeline = timelineFactory(callback);


  return (
    <div>
      <ExperimentWindow
        settings={{ timeline }}
        plugins={{ callbackImageKeyboardResponsePlugin }}
      />
      {/* <LoginForm/> */}

    </div>
  )
}


