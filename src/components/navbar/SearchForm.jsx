import React from "react";
import { Form, FormControl, Button } from 'react-bootstrap';

const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    }, [value]);

    return [value, setValue];
};

const SearchForm = (props) => {
    const [searchTerm, setSearchTerm] = useStateWithLocalStorage("filterName");

    const handleChange = event => setSearchTerm(event.target.value);
    //const handleClick = event => window.location.reload(false);

    return (
        <Form inline /*onSubmit={e => { e.preventDefault(); }}*/>
            <FormControl type="text" placeholder="Search our Restaurants" className="mr-sm-2" value={searchTerm} onChange={handleChange} />
            <Button variant="outline-danger" type="Submit" /*onClick={handleClick}*/>Search</Button>
        </Form>
    );
}

export default SearchForm;