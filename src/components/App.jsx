import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./filters/Filters";
import getCharactersFromApi from "../services/getCharactersFromApi.js";
import Header from "./Header.jsx";
import CharacterDetail from "./CharacterDetail.jsx";

import { useEffect, useState } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";

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

    const { pathname } = useLocation();
    const routeData = matchPath("/character/:idCharacter", pathname);
    const urlId = routeData !== null ? routeData.params.idCharacter : null;
    const user = users.find((user) => {
        return user.id === Number(urlId); //no enseñaba nada porque no era un numero
    })


    return (
        <>
            <Header />
        <main>
            <Routes>
                <Route path="/" element={(
            <>
            <Filters onChangeName={handleFilterName} />
            <CharacterList users={filteredCharacters} />
            </>
        )} />
            <Route path="/character/:idCharacter" element={<CharacterDetail user={user} />} />
            </Routes>
        </main>
        </>
    )
}

export default App
