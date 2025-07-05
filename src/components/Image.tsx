import React from 'react'
import { useState, useEffect } from "react";
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


  return (
    <div>
        <input type="File" multiple onChange={onFileChange}></input>
    </div>
  )
}

export default Image

