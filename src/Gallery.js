import React, { Component } from 'react';
import ImageGallery from "react-image-gallery";

import i1 from './images/Gallery/1.jpeg';
import i2 from './images/Gallery/2.jpeg';
import i3 from './images/Gallery/3.jpeg';
import i4 from './images/Gallery/4.jpeg';
import i5 from './images/Gallery/5.jpeg';
import i6 from './images/Gallery/6.jpeg';
import i7 from './images/Gallery/7.jpeg';

const images = [
    {original: i1, thumbnail: i1},
    {original: i2, thumbnail: i2},
    {original: i3, thumbnail: i3},
    {original: i4, thumbnail: i4},
    {original: i5, thumbnail: i5},
    {original: i6, thumbnail: i6},
    {original: i7, thumbnail: i7},
]

class Gallery extends Component {
    render () {
        return (
            <div>
                <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showBullets={true}/>
            </div>
        );
    }
}

export default Gallery;