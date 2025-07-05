import React from 'react'
import { useState, useEffect, useContext, useRef } from "react";
import { createWorker } from "tesseract.js";




const Image = () => {

    const getWords = (fileName: File) => { // add "file" as a param + swap it out with recognize
        (async() => {
        const worker = await createWorker("eng");
        const a = await worker.recognize(fileName);
        alert(a.data.text);
        await worker.terminate();
        })();
    };
    
    // Check to see if file changed, if so then update it + store it with useState
    const [file, setFile] = useState<File | undefined>(undefined);
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        alert("file changed");
        if (e.target.files && e.target.files.length > 0)  {
            setFile(e.target.files[0]);
        }
    }

    // Whenever file is added, get words
    useEffect(() => {
        getWords(file);
    }, [file]);


    const canvasRef = useRef<HTMLCanvasElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // On page load, start camera
    useEffect(() => {
        (async() => {
            try {
                const videoSrc = await navigator.mediaDevices.getUserMedia({video:true});
                if (videoRef.current) {
                    videoRef.current.srcObject = videoSrc;
                }
            } catch (error) {
                alert(error);
            }
            
        })();
    }, []); 

    const saveImage = () => {
        // save captured image
        var canvas = canvasRef.current;
        var context = canvas?.getContext("2d");
        var image = videoRef.current;
        alert(canvas);
        if (image && canvas) {
            // Draw image
            context?.drawImage(image, 0, 0, 650, 490);
        }
        // Convert to base 64
        const imgBase64 = canvas?.toDataURL("image/png");
        getWords(imgBase64); // need to turn this into a file

    }

  return (
    <div>
        <input type="File" multiple onChange={onFileChange}></input>
        <video ref={videoRef} id="camera" autoPlay width="400" height="300"></video>
        <button id="capture_button" onClick={saveImage}>Capture!</button>
        <canvas ref={canvasRef} id="canvas" width="650" height="490"></canvas>
    </div>
  )
}

export default Image

