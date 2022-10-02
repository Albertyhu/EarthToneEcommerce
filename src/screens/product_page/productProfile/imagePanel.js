import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid'; 
import {
    ImageMainContainer,
    InnerShell,
    MainImage,
    ImageList,
    ChildImage,
    ImageListItem,
} from './profileStyledComp.js'
const ImagePanel = props => {
    const { imageArray, initial } = props; 
    const [mainImage, setMainImage] = useState(initial)
    const changeMainImage = url => {
        setMainImage(url)
    }

    const renderChildImage = () => {
        return imageArray.map(item => <ImageListItem key={uuid()} onMouseEnter={() => changeMainImage(item)}><ChildImage src={item} /></ImageListItem>)  
    }

    useEffect(() => {
        setMainImage(initial)
    }, [initial])

    return (
        <ImageMainContainer>
            <InnerShell>
                <ImageList>
                    {
                        renderChildImage()
     
                        }
                </ImageList>
                <MainImage src={mainImage}/>
            </InnerShell>

        </ImageMainContainer> 
        ) 
}

export default ImagePanel; 