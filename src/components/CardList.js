import React from 'react';
import Card from './Card';

const CardList = ({starwars}) => { 
	return(
		<div>
			{
				starwars.map((user, i) => {
					return (<Card 
						key={i} 
						name={starwars[i].name} 
						height={starwars[i].height} 
						mass={starwars[i].mass} 
						hair_color={starwars[i].hair_color} 
						skin_color={starwars[i].skin_color} 
						eye_color={starwars[i].eye_color} 
						birth_year={starwars[i].birth_year} 
						gender={starwars[i].gender} 
						homeworld={starwars[i].homeworld} 
						img={starwars[i].img}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;