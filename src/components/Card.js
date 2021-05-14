import React from 'react';

const Card = ({ name, height, mass, hair_color, eye_color, skin_color, birth_year, gender, img }) => {
	return (
		<div className='bg-black-20 br4 white dib pa3 ma2 grow'>
			<img alt='character' src ={img} width='200' height='200'/>
			<div className='o-50'>
				<h2>{name}</h2>
				<p>Height: {height} cm</p>
				<p>Weight: {mass} kg</p>
				<p>Hair: {hair_color}</p>
				<p>Eye color: {eye_color}</p>
				<p>Skin: {skin_color}</p>
				<p>Birth: {birth_year}</p>
				<p>Gender: {gender}</p>
			</div>
		</div>
	);
}

export default Card;