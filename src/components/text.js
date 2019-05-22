import {FontLoader, Vector3} from 'three';
import React, {useEffect, useState} from 'react';
import {promisifyLoader} from '../util';

const asyncFontLoader = promisifyLoader(new FontLoader());

const Text = ({fontUrl, text}) => {
    const [font, setFont] = useState(null);

    useEffect( () => {
        async function fetchFont() {
            setFont(await asyncFontLoader(fontUrl));
        }
        fetchFont();
    }, []);

    return (
        font && (
            <mesh position={new Vector3(-200, 0, -200)}>
                <textGeometry attach="geometry" args={[text, {
                    font: font,
                    size: 10,
                    height: 5,
                    curveSegments: 5,
                    bevelEnabled: true,
                    bevelThickness: 1,
                    bevelSize: 2,
                    bevelOffset: 0,
                    bevelSegments: 2}]} />
                <meshPhongMaterial attach="material" color={0xfff00a} flatShading={true} />
            </mesh>
        )
    );
}

export default Text;
