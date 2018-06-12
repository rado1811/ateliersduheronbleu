import React from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

const Uploader = () => (
  <ImagesUploader
    url="http://localhost:5000/multiple"
    optimisticPreviews
    onLoadEnd={err => {
      if (err) {
        console.error(err);
      }
    }}
    label="Upload multiple images"
  />
);

export default Uploader;
