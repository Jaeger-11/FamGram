import React from 'react';

const Modal  = ({selectedImage, setSelectedImage}) => {
    const handleClick = (event) => {
        if(event.target.classList.contains('backdrop')){
            setSelectedImage(null)
        }
    }
    return(
        <section className='backdrop' onClick={handleClick}>
            <img src={selectedImage} alt='pic clicked'/>
        </section>
    )
}

export default Modal;