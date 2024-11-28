
function CharacterDetail({ user }) {
    if (!user) {
        return <>Este personaje no existe</>
    }

    return (
        <section className="section">
            <div className="detail-container">
            <img src={user.photo} alt={user.name} className="photo"/>
            <div className="detail-character">
            <h4>{user.name}</h4>
            <p>{user.species}</p>
            <p>Aparece en {user.episode?.length || "no sabemos cuántos"} episodios</p>
            <p>Es de: {user.origin.name}</p>
            <p>Está: {user.status}
            <span className="status-icon">
                {user.status === "Alive" ? "🟢" : "💀"}
            </span>
            </p>
            </div>
            </div>
        </section>
    )
}

export default CharacterDetail