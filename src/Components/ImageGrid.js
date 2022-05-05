import React from 'react';
import useFirestore from '../Hooks/useFirestore';
import {motion } from 'framer-motion';

const ImageGrid = ({setSelectedImage}) => {
    const images = 'images'
    const { files } = useFirestore(images);
    
    return(
        <div className='imageGrid'>
            {files && files.map(file => (
                <motion.div 
                layout
                whileHover={{opacity : 1}}
                key={file.id} 
                className="imageWrap" 
                onClick={() => setSelectedImage(file.url)}>
                    <img src={file.url} alt={file.id} className="image"  />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;