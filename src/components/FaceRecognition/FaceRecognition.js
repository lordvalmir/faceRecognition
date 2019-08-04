import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ regions, imageUrl }) => {
	const calculateFaceLocation = (region) => {
    const clarifaiFace = region.region_info.bounding_box;
    console.log(clarifaiFace);
    const image = document.getElementById('inputimage');
    console.log(image);
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width);
    console.log(height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  console.log("regions", regions)

	return (
		<div className='center ma'>
			<div className='absolute center mt2 mb2'>
				<img id='inputimage' alt='' src={ imageUrl } width='500px' heigh='auto' />
				<React.Fragment>
					{regions.map((region, index) => {
						const box = calculateFaceLocation(region);	
						return <div key={index} className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }} />
					})}
				</React.Fragment>
			</div>
		</div>
		);
}

export default FaceRecognition;