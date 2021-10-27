import React from 'react';
import { Composition } from 'remotion';
import {MyComposition} from "./components/Player/PlayerComponent";

function Remotion() {
    return (
        <>
            <Composition
                id="HelloWorld"
                component={MyComposition}
                durationInFrames={600}
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
}

export default Remotion;