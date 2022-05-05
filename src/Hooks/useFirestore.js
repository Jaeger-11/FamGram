import React, {useState, useEffect} from "react";
import { projectFirestore } from "../Firebase/config";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import { collection } from "firebase/firestore";

const useFirestore = (collect) => {
    const [files, setFiles] = useState([])
    const collectionRef = collection(projectFirestore,collect)
    const q = query(collectionRef, orderBy("createdAt", "desc"))
    
    //FUNCTION TO GET DATA, WE USE QUERY WHENEVER WE WANT TO ORDERBY
    const getData = () => {   
        onSnapshot(q,(snap) => {
            orderBy('createdAt', 'desc')
            let documents = []
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            });
            setFiles(documents)
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return { files };
}

export default useFirestore;