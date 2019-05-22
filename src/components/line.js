import {Vector3} from 'three';
import React from 'react';

const Line = ({vertices, color = 0x0000ff}) => {
    return (
        <line>
            <lineBasicMaterial attach="material" color={color} />
            <geometry attach="geometry" vertices={vertices.map(v => new Vector3(...v))} />
        </line>
    );
}

export default Line;
