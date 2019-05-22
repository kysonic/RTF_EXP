import React, {useEffect, useRef} from 'react';
import {apply, useRender, useThree} from 'react-three-fiber';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
apply({ OrbitControls });

const OrbitalControls = ({fov = 55, position = [0, 0, 5], rotateSpeed = 0.1}) => {
    const camera = useRef();
    const controls = useRef();
    const { size, setDefaultCamera } = useThree();
    useEffect(() => void setDefaultCamera(camera.current), []);
    useRender(() => controls.current.update());

    return (
        <React.Fragment>
            <perspectiveCamera
                ref={camera}
                aspect={size.width / size.height}
                radius={(size.width + size.height) / 4}
                fov={fov}
                position={position}
                onUpdate={self => self.updateProjectionMatrix()}
            />
            {camera.current && (
                <orbitControls ref={controls} args={[camera.current]} enableDamping dampingFactor={0.1} rotateSpeed={rotateSpeed} />
            )}
        </React.Fragment>
    );
}

export default OrbitalControls;
