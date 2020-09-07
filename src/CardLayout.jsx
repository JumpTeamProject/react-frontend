import React from "react";
import Card from './CardUI';
import { useFetch } from './service/CardService';

function CardLayout(props) {
  const { loading, data } = useFetch('getAll', null);

  return (
    <div>
      {loading && <p>Currently Displaying Restaurants</p>}
      {data &&
        data.length > 1 &&
        data.map(restaurant => 
            <Card key={restaurant.id} info={restaurant} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} />    
         )}
      {/* {data && data.length > 0 && <Card info = {data.id} /> } */}
    </div>
  );
} export default CardLayout;