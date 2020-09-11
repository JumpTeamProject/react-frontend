import React, { useState } from "react";
import Card from './CardUI';
import { useFetch } from '../service/RestaurantService';

function CardLayout(props) {
  const { loading, data } = useFetch('getAll', null);
  const [filterValue, setFilterValue] = useState(localStorage.getItem("filterName") || "");

  return (
    <div>
      {loading && <p>Currently Displaying Restaurants</p>}
      {data &&
              data.length >= 1 &&
              data.map(restaurant => restaurant.name.toLowerCase().includes(filterValue.toLowerCase()) &&
            <Card key={restaurant.id} info={restaurant} handleDelete={props.handleDelete} />    
         )}
      {/* {data && data.length > 0 && <Card info = {data.id} /> } */}
    </div>
  );
} export default CardLayout;