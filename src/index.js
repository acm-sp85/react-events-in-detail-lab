import React from 'react';
import ReactDOM from 'react-dom';
import CoordinatesButton from './components/CoordinatesButton.js'
import DelayedButton from './components/DelayedButton.js'


ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates) } />
    <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />
  </div>,
  document.getElementById('global')
);
