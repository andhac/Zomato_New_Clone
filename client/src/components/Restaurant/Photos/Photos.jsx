import React, {useState} from 'react';
import ReactSimpleImageViewer from "react-simple-image-viewer";
//Component

import PhotoCollection from "./PhotoCollection";

const Photos = () => {
    const[photos]=useState([
        "https://b.zmtcdn.com/data/pictures/chains/9/19167289/b97da9ccc72f8addaf2129de2d78aa5c.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/9/19167289/dad538500f15f810efb501e1730581a3.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/9/19167289/972f2123baaa8fb75c6489baaba691d6.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/9/19167289/c4b0de974b843fa18b9c6e57f0a57590.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/9/19167289/33fdb5e66d443ac3742ffcaa6530dc32.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/9/19167289/1a1322bf9290da0369042b2adef3a7f5.jpg"
    ]);
    const [isMenuOpen, setIsMenuOpen] =useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const closeViewer = () => setIsMenuOpen(false)
    const openViewer = () => setIsMenuOpen(true)

    return (
        <>
            {isMenuOpen &&
               ( <ReactSimpleImageViewer src={photos} currentIndex={currentImage} disableScroll={false} onClose={closeViewer}/>)
            }
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
                {photos.map((photo, index) => (
                    <PhotoCollection key={index} openViewer={openViewer} image={photo} index={index} setCurrentImage={setCurrentImage}/>
                ))}
            </div>
        </>
    );
};

export default Photos;