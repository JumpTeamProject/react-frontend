import React from "react";
import Card from './Card';
import { useFetch } from '../service/ReviewService';

function CardLayout(props) {
  const { loading, data } = useFetch('getAll', null);

  return (
    <div>
      {loading && <p>loading...</p>}
      {data &&
        data.length > 1 &&
        data.map(review => <Card key={review.id} info={review} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} />)}
      {/* {data && data.length > 0 && <Card info = {data.id} /> } */}
    </div>
  );
}

export default CardLayout;