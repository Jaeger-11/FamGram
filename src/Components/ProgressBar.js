import React, { useEffect } from "react";
import useStorage from "../Hooks/useStorage";

const ProgressBar = ({file, setFile}) => {
    
    const {url, progress} = useStorage(file);
    useEffect(() => {
        if(url){
            setFile(null)
        }
    }, [url, setFile])
    console.log(url, progress)
    return (
        <div style={{width: `${progress}%`, backgroundColor: "green", height: '5px'}}></div>
    ) 
}

export default ProgressBar;