function FilterByStatus({ onChangeStatus, currentStatus }) {

    const handleChange = (ev) => {
        onChangeStatus(ev.target.value);
    }
return (
    <div className="input">
        <h5>¿Cuál es el estado del personaje?</h5>
        <label htmlFor="alive" className="filter-status">Vivo 🟢</label>
        <input type="radio" name="status" value="Alive" checked={currentStatus === "Alive"} onChange={handleChange} className="filter-radio" />
        <label htmlFor="dead" className="filter-status">Muerto 💀</label>
        <input type="radio" name="status" value="Dead" checked={currentStatus === "Dead"} onChange={handleChange} className="filter-radio" />
        <label htmlFor="unknown" className="filter-status">Desconocido 💀</label>
        <input type="radio" name="status" value="unknown" checked={currentStatus === "unknown"} onChange={handleChange} className="filter-radio" />
    </div>
    )
}

export default FilterByStatus