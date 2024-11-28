import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./filters/Filters";
import getCharactersFromApi from "../services/getCharactersFromApi.js";
import Header from "./Header.jsx";

import { useEffect, useState } from "react";

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getCharactersFromApi().then((usersData) => {
            setUsers(usersData);
        });
    }, [])

    return (
        <>
            <Header />
        <main>
            <CharacterList users={users}/>
        </main>
        </>
    )
}

export default App
