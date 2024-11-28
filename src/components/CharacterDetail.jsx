import { Link } from "react-router-dom";

function CharacterDetail({ user }) {
    if (!user) {
        return <div className="no-person-div"><p className="no-person">Este personaje no existe</p>
        <img src="https://i.imgur.com/UKa6hST.png" className="no-person-img"/></div>
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
            <Link to={"/"} className="link"><p className="back">← Atrás</p></Link>
        </section>
    )
}

export default CharacterDetail