import React from 'react';

const PhotoCollection = (props) => {
    const openImage = () => {
        props.openViewer()
        props.setCurrentImage(props.index)
    }
    return (
        <>
            <div className='h-32flex flex-col ' onClick={() => openImage()}>
                <div className='w-full overflow-hidden rounded-lg h-full'>
                    <img src={props.image} alt='menu' className='w-full h-full transform transition duration-400 rounded-lg hover:scale-110 object-center object-cover'/>
                </div>
            </div>
        </>
    );
};

export default PhotoCollection;