import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./filters/Filters";
import getCharactersFromApi from "../services/getCharactersFromApi.js";
import Header from "./Header.jsx";

import { useEffect, useState } from "react";

function App() {

    const [users, setUsers] = useState([]);
    const [filterName, setFilterName] = useState("");

    useEffect(() => {
        getCharactersFromApi().then((usersData) => {
            setUsers(usersData);
        });
    }, [])

    const handleFilterName = (valueInput) => {
        setFilterName(valueInput);
    }
    const filteredCharacters = users.filter((user) => {
        return user.name.toLowerCase().includes(filterName.toLowerCase());
    })

    return (
        <>
            <Header />
        <main>
            <Filters onChangeName={handleFilterName} />
            <CharacterList users={filteredCharacters} />
        </main>
        </>
    )
}

export default App
