import React, {useEffect, useState} from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'

const ffmpeg = createFFmpeg({ corePath: 'http://localhost:3000/node_modules/@ffmpeg/core/dist/ffmpeg-core.js', log: true })
function FfmpegConnect() {
    const [ready, setReady] =useState(false)
    const load = async () => {
        await ffmpeg.load()
        setReady(true)
        console.log("Done")
    }

    useEffect(() => {
        load()
    }, [])

    return ready? (
        <div>Done</div>
    ): (<div>Loading .. </div>)
}

export default FfmpegConnect;