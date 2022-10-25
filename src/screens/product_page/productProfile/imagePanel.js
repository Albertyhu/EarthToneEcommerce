import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid'; 
import {
    ImageMainContainer,
    ImageInnerShell ,
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

    const [horizontal, setHoriz] = useState(window.innerWidth > 340)

    const resizeEvent = () => {
        if (window.innerWidth > 340)
            setHoriz(true)
        else
            setHoriz(false)
    }

    useEffect(() => {
        setMainImage(initial)
    }, [initial])

    window.addEventListener('resize', resizeEvent); 

    useEffect(() => {
        return () => { window.removeEventListener('resize', resizeEvent);  }
    }, [])

    useEffect(() => {
        console.log('horizontal: ' + horizontal)
    }, [horizontal])

    return (
        <ImageMainContainer id = "ImageMainContainer">
            {horizontal ?
                <ImageInnerShell id = "ImageInnerShell">
                    <ImageList>
                        {
                            renderChildImage()

                        }
                    </ImageList>
                    <MainImage src={mainImage} />
                </ImageInnerShell >
                :
                <ImageInnerShell id="ImageInnerShell">
                    <MainImage src={mainImage} />
                    <ImageList>
                        {
                            renderChildImage()
                        }
                    </ImageList>
                </ImageInnerShell>
                }
        </ImageMainContainer> 
        ) 
}

export default ImagePanel; 