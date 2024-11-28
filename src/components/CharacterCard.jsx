import { Link } from "react-router-dom"; 

function CharacterCard({ userData }) {

    return (
       <li>
            <Link to={`/character/${userData.id}`}>
            <img src={userData.photo} alt={userData.name} />
            <h4>{userData.name}</h4>
            <p>{userData.species}</p>
            </Link>
       </li>
    )
}

export default CharacterCard