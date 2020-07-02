import React from 'react'

const ImageList = (props) => {

    console.log(props.images)
    return  props.images.map( (image) => {
        return <img src={image.urls.regular}/>
    });
}

export default ImageList;