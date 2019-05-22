import React from 'react';
import OrbitalControls from './orbital-controls';

import Cube from "./cube";
import Line from "./line";
import Text from "./text";



const App = (props) => {
    return (
        <React.Fragment>
            <Cube />
            <Line vertices={[[-1.5, 0, 0], [0, 1.5, 0], [1.5, 0, 0], [0, -1.5, 0], [-1.5, 0, 0]]} />
            <Text fontUrl="/assets/fonts/gentilis_bold.typeface.json" text="React Three Fiber" />
            <OrbitalControls />
        </React.Fragment>
    );
};

export default App;
