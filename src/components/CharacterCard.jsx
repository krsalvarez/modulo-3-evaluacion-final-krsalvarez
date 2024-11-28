import { Link } from "react-router-dom"; 

function CharacterCard({ userData }) {

    return (
       <li className="card">
            <Link to={`/character/${userData.id}`}>
            <img src={userData.photo} alt={userData.name} className="first-photo"/>
            <h4>{userData.name}</h4>
            <p>{userData.species}</p>
            </Link>
       </li>
    )
}

export default CharacterCard