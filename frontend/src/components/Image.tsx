import React, { useState, useEffect, useRef } from "react";
import { createWorker } from "tesseract.js";

const ImageOCR = () => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [isProcessing, setIsProcessing] = useState(false);
  const [ocrResult, setOcrResult] = useState<string>("");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string>("");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError("");
    }
  };

  // OCR processing effect
  useEffect(() => {
    if (!file) return;

    const processOCR = async () => {
      try {
        setIsProcessing(true);
        setError("");
        
        const worker = await createWorker("eng");
        const result = await worker.recognize(file);
        setOcrResult(result.data.text);
        await worker.terminate();
      } catch (err) {
        setError(`OCR Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setIsProcessing(false);
      }
    };

    processOCR();
  }, [file]);

  // Camera setup effect
  useEffect(() => {
    const setupCamera = async () => {
      try {
        const videoStream = await navigator.mediaDevices.getUserMedia({ 
          video: { width: 400, height: 300 } 
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = videoStream;
          setStream(videoStream);
        }
      } catch (err) {
        setError(`Camera Error: ${err instanceof Error ? err.message : 'Camera access denied'}`);
      }
    };

    setupCamera();

    // Cleanup function
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    
    if (!canvas || !video) {
      setError("Canvas or video not available");
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      setError("Could not get canvas context");
      return;
    }

    try {
      // Draw the video frame to canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Convert canvas to blob and create file for OCR
      canvas.toBlob((blob) => {
        if (blob) {
          const capturedFile = new File([blob], "captured-image.png", { type: "image/png" });
          setFile(capturedFile);
        }
      }, "image/png");
      
    } catch (err) {
      setError(`Capture Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Image OCR Scanner</h1>
      
      {/* File Upload Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Upload Image</h2>
        <input 
          type="file" 
          accept="image/*"
          onChange={onFileChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Camera Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Camera Capture</h2>
        <div className="flex flex-col items-start gap-4">
          <video 
            ref={videoRef}
            autoPlay 
            playsInline
            width="400" 
            height="300"
            className="border border-gray-300 rounded"
          />
          <div className="flex gap-2">
            <button 
              onClick={captureImage}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Capture Image
            </button>
            <button 
              onClick={stopCamera}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Stop Camera
            </button>
          </div>
        </div>
      </div>

      {/* Canvas for captured image */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Captured Image</h2>
        <canvas 
          ref={canvasRef}
          width="650" 
          height="490"
          className="border border-gray-300 rounded max-w-full"
        />
      </div>

      {/* Status and Results */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {isProcessing && (
        <div className="mb-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded">
          Processing OCR...
        </div>
      )}

      {ocrResult && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">OCR Result:</h2>
          <div className="p-4 bg-gray-100 border border-gray-300 rounded">
            <pre className="whitespace-pre-wrap">{ocrResult}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageOCR;