import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'This Magic site will detect face in your pictures. Just insert URL of picture.'}
			</p>
			<div className='center'>
				<div className='form center pa4 ba b--light-silver br3 bw1 shadow-3'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
					<button 
						className='w-30 grow f4 link ph3 shadow-5 pv2 dib black bg-grey'
						onClick={onButtonSubmit}
						>Detect</button>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;