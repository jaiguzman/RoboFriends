import React from 'react';
import Card from './Card';

//This will be used for the picture, name, and email for the robot cards
const CardList = ({ robots }) => {//robots is apart of the props from index.js file. using destructuring
  const cardsArray = robots.map((user, i) => {
    //key needs to be there when using a loop. it gives it a unique key incase something happens in the DOM
    return (
      <Card
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}
      />
    );
  });
  return (
    <div>
      {cardsArray}
    </div>
  );
}

export default CardList;

/**
 * BONUS:
 * Key prop should have something that doesn't change. Fore 
 * example, index (or i in our case) could change if array items get moved.
 * So a better key in this case would be something unique like id.
 */