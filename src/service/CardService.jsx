import React, { useState, useEffect } from 'react';
import axios from 'axios';

// custom hook for performing GET request
export const useFetch = (searchMethod, searchValue) => {
  let param = 0;

  if (searchValue !== undefined) param = searchValue;

  const getAll = 'http://localhost:8080/api/restaurants';
  const getById = 'http://localhost:8080/api/restaurant/' + param;
  let url = null;

  switch (searchMethod) {
    case 'getById': url = getById;
      break;
    case 'getAll': url = getAll;
      break;
    default: url = null;
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setData(response.data);
          console.log('Date fetched! -> ' + response.data);
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data };
};

export function createRestaurant(restaurant) {
  return axios.post('http://localhost:8080/api/add/restaurant', restaurant);
}

// export function updateStudent(student) {
//   console.log('in the upate service');
//   return axios.put('http://localhost:8080/api/update/student', student);
// }

export function deleteRestaurant(restaurantId) {
  return axios.delete('http://localhost:8080/api/delete/restaurant/' + restaurantId);
}




