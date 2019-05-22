import React from 'react';
import ReactDOM from 'react-dom';
import {Canvas} from 'react-three-fiber';
import App from './components/app';

ReactDOM.render(
    <Canvas>
        <App />
    </Canvas>,
    document.getElementById('root')
);
