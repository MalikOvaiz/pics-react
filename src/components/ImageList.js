import React from 'react'

const ImageList = (props) => {

    console.log(props.images)
    return  props.images.map( (image) => {
        <div key={image.id}>
            return <img  src={image.urls.regular}/>
        </div>
    });
}

export default ImageList;