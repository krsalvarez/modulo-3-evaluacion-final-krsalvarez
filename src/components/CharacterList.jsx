
import CharacterCard from "./CharacterCard";
function CharacterList({ users }) {

    const usersElements = users.map((user) => {
        return <CharacterCard key={user.id} userData={user} />
    })
    return (
        <section>
            <h3>Lista de Personajes</h3>
            <ul className="section-list">
                {usersElements}
            </ul>
        </section>
    )
}

export default CharacterList