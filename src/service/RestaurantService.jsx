import { useState, useEffect } from 'react';
import axios from 'axios';

// custom hook for performing GET request
export const useFetch = (searchMethod, searchValue) => {
  let param = 0;

  if (searchValue !== undefined) param = searchValue;

<<<<<<< HEAD:src/service/UserService.jsx
  const getById = 'http://localhost:8080/api/users/' + param;
=======
  const getAll = 'http://localhost:8080/api/restaurants';
  const getById = 'http://localhost:8080/api/restaurant/' + param;
>>>>>>> David:src/service/RestaurantService.jsx
  let url = null;

  switch (searchMethod) {
    case 'getById': url = getById;
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

<<<<<<< HEAD:src/service/UserService.jsx
export function createUser(user) {
  return axios.post('http://localhost:8080/api/add/user', user);
}

export function validateUser(email, password) {
  return axios.get('http://localhost:8080/api/users/login/username/' + email + '/password/' + password);
}

export function updateUser() {
  console.log('in the upate service');
  return axios.put('http://localhost:8080/api/update/user');
}

export function deleteUser(userId) {
  return axios.delete('http://localhost:8080/api/delete/user/' + userId);
=======
export function createRestaurant(restaurant) {
  return axios.post('http://localhost:8080/api/add/restaurant', restaurant);
}

// export function updateStudent(student) {
//   console.log('in the upate service');
//   return axios.put('http://localhost:8080/api/update/student', student);
// }

export function deleteRestaurant(restaurantId) {
  return axios.delete('http://localhost:8080/api/delete/restaurant/' + restaurantId);
>>>>>>> David:src/service/RestaurantService.jsx
}




