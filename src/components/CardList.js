import React from 'react';
import Card from './Card';

const CardList = ({ gifs }) => {

  return (
    <div>
      {
        gifs.map((gif, i) => {
          return (
            <Card
              key={gif.id}
              id={gif.id}
              url={gif.images.downsized.url}
			  image={gif.images['480w_still'].url}
              />
          );
        })
      }
    </div>	
  );
}

export default CardList;