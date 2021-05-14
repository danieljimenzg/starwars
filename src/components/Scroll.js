import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', borderTop:'1px solid #D4AF37', height:'500px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;