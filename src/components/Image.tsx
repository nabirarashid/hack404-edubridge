import React from 'react'
import { useState, useEffect, useContext, useRef } from "react";
import { createWorker } from "tesseract.js";




const Image = () => {

    const [file, setFile] = useState<File | undefined>(undefined);
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert("file changed");
    if (e.target.files && e.target.files.length > 0)  {
    setFile(e.target.files[0]);
    }
    }


    useEffect(() => {
        (async() => {
        const worker = await createWorker("eng");
        const a = await worker.recognize(file);
        alert(a.data.text);
        await worker.terminate();
        })();
        }, [file]);


    const canvasRef = useRef<HTMLCanvasElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
    (async() => {
        try {
            const videoSrc = await navigator.mediaDevices.getUserMedia({video:true});
            var video = document.getElementById("camera");
            if (video) {
                (video as HTMLVideoElement).srcObject = videoSrc;
            }
        } catch (error) {
            alert(error);
        }
        //const vendorUrl = window.getUrl || window.webkitURL;


    // save captured image
    var capture = document.getElementById("capture_button");
    var canvas = canvasRef.current;
    var context = canvas?.getContext("2d");
    var image = videoRef.current;
    capture?.addEventListener("click", function() {
        alert("CAPTURED");
        if (video && image && canvas) {
            context?.drawImage(image, 0, 0, 650, 490);
        }
    });

})();

}, []); // need to get base64 image and then put it in

  return (
    <div>
        <input type="File" multiple onChange={onFileChange}></input>
        <video id="camera" autoPlay width="400" height="300"></video>
        <button id="capture_button">Capture!</button>
        <canvas id="canvas" width="650" height="490"></canvas>
    </div>
  )
}

export default Image

