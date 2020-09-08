import React from 'react';
import {useFetch} from '../service/StudentService';

function LoginSet(props) {

    const {loading, data} = useFetch('getAll', null);

    console.log(data);
    
        return (
            <div>
                {loading && <p>loading...</p>}
                {data && data.length > 0 && data.map(user => <Login key={user.id} info={user}/>)}
            </div>
        );
}

export default LoginSet;