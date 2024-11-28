function CharacterDetail({ user }) {
    if (!user) {
        return <>Este personaje no existe</>
    }

    return (
        <section>
            <img src={user.photo} alt={user.name} />
            <h4>{user.name}</h4>
            <p>{user.species}</p>
            <p>Aparece en {user.episode?.length || "no sabemos cuántos"} episodios</p>
            <p>Es de: {user.origin.name}</p>
            <p>Está: {user.status}</p>
        </section>
    )
}

export default CharacterDetail