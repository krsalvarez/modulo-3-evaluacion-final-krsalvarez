function FilterBySpecie({ onChangeSpecie, currentSpecie }) {

    const handleChange = (ev) => {
        onChangeSpecie(ev.target.value);
    }
return (
    <div className="input">
        <h5>¿Qué especie de personaje buscas?</h5>
        <label htmlFor="human" className="filter-specie">Humano</label>
        <input type="radio" id="human" name="specie" value="Human" checked={currentSpecie === "Human"} onChange={handleChange} className="filter-radio" />
        <label htmlFor="alien" className="filter-specie">Alien</label>
        <input type="radio" id="alien" name="specie" value="Alien" checked={currentSpecie === "Alien"}onChange={handleChange} className="filter-radio" />
    </div>
    )
}

export default FilterBySpecie
