import React from 'react';
import CrossfadeImage from "react-crossfade-image";

import clean from"../images/clean.jpg";
import woods from"../images/woods.jpg";

const images = [
    "/static/clean-7f4db66a9c04422b812cec863144a416.jpg",
    "/static/woods-bea1303d2c3e322268961407920c0278.jpg"
  ];

class ImageChanger extends React.Component {
    constructor() {
        super();
        this.state = {
          imageIndex: 0
        };
        this.changeImage = this.changeImage.bind(this);

      }

      

    
      changeImage() {
        if (this.state.imageIndex === images.length - 1) {
          this.setState({ imageIndex: 0 });
        } else {
          this.setState({ imageIndex: this.state.imageIndex + 1 });
        }
      }

    render() {
        console.log(clean);
        console.log(woods);

        setTimeout(() => {
            this.changeImage()
        }, 2000);

        return (
<div className="fade-image">
    <CrossfadeImage
        src={images[this.state.imageIndex]}
        duration={1000}
        timingFunction={"ease-out"}
        containerClass={"fade-image"}
        style={{maxHeight:"none", maxWidth:"none"}}
    />
</div>
        );
    }
}




export default ImageChanger;