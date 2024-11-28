

function FilterByName({ onChangeName }) {

    const handleChange = (ev) => {
        onChangeName(ev.target.value);
    }
return (
    <div className="input">
        <label htmlFor="name" className="label">¿Qué personaje buscas?</label>
        <input type="text" id="name" onChange={handleChange} className="user-input" placeholder="Escribe un nombre..."/>
    </div>
    )
}

export default FilterByName
