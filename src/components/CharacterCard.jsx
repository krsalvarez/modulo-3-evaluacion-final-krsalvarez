function CharacterCard({ userData }) {

    return (
       <li>
            <img src={userData.photo} alt={userData.name} />
            <h4>{userData.name}</h4>
            <p>{userData.species}</p>
       </li>
    )
}

export default CharacterCard