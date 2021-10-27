import React from 'react';
import {Button} from "antd";
import {registerRoot} from 'remotion';
import Remotion from './remotion';
import Renderer from "./renderer";

registerRoot(Remotion);


function RenderButton() {

    const render = () => {
        let resp = Renderer({req: {}, res: {}})
        console.log(resp)
    }

    return (
        <div>
            <Button onClick={render}>Render</Button>
        </div>
    );
}

export default RenderButton;