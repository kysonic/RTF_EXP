import * as THREE from 'three';
import React, { useRef } from 'react';
import { useRender } from 'react-three-fiber';


function Cube({dimentions = [1,1,1], rotationSpeed = 0.01, color = 0x0fff00}) {
    let cubeMesh = useRef(null);
    useRender(state => {
        if (cubeMesh) {
            cubeMesh.current.rotation.x += rotationSpeed;
            cubeMesh.current.rotation.y += rotationSpeed;
        }
    });
    return (
        <mesh ref={cubeMesh} onClick={() => {console.log('CLICK');}}>
            <boxGeometry attach="geometry" args={dimentions}></boxGeometry>
            <meshBasicMaterial attach="material" color={color}></meshBasicMaterial>
        </mesh>
    );
}

export default Cube;
