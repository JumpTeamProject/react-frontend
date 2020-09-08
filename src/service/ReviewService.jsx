import { useState, useEffect } from 'react';
import axios from 'axios';

// custom hook for performing GET request
export const useFetch = (searchMethod, searchValue) => {
    let param = 0;

    if (searchValue !== undefined) param = searchValue;

    // const getAll = 'http://localhost:8080/api/reviews';
    const getById = 'http://localhost:8080/api/reviews/' + param + '/restaurant';
    let url = null;

    switch (searchMethod) {
        case 'getById': url = getById;
            break;
        // case 'getAll': url = getAll;
        //     break;
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

export function createReview(review) {
    return axios.post('http://localhost:8080/api/add/review', review);
}

export function updateReview(review) {
    console.log('in the upate service');
    return axios.put('http://localhost:8080/api/update/review', review);
}

export function deleteReview(reviewId) {
    return axios.delete('http://localhost:8080/api/delete/review/' + reviewId);
}




