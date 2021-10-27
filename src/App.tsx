import React from 'react';

import Base from './components/Konva/Base';
import LottieAnimation from './components/LottieAnimation';
import PlayerComponent from './components/Player/PlayerComponent';

import './App.css';
import 'antd/dist/antd.css';
import RenderButton from "./RenderButton";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        height: '500px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <PlayerComponent />
        <RenderButton />
      {/* <LottieAnimation/> */}
      {/*<Base />*/}
      {/*<FfmpegConnect />*/}
    </div>
  );
}

export default App;
