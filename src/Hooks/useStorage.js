import React from 'react';
import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore} from '../Firebase/config';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import {collection, addDoc} from 'firebase/firestore'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        // references
        const storageRef = ref(projectStorage, file.name); // a ref to store the file in the firebaseStorage, we use the file name as the name we would save it in the location
        const collectionRef = collection(projectFirestore,'images')
        const uploadTask = uploadBytesResumable(storageRef, file); // we upload the file using the reference
        uploadTask.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 ;
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const url =  await getDownloadURL(uploadTask.snapshot.ref);
            const createdAt = new Date();
            setUrl(url);
            addDoc(collectionRef, { 
                url : url,
                createdAt : createdAt,
            })
        })
    }, [file]);

    return{progress, url, error}
}

export default useStorage;
