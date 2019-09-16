import React from 'react';
import { tsPropertySignature } from '@babel/types';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img src={image.urls.regular} />
  });

  return <div>{images}</div>;
};

export default ImageList;