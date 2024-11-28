function CharacterDetail({ user }) {

    return (
        <section>
            <img src={user.photo} alt={user.name} />
            <h4>{user.name}</h4>
            <p>{user.species}</p>
        </section>
    )
}

export default CharacterDetail