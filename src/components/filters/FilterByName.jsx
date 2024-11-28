function FilterByName({ onChangeName }) {

    const handleChange = (ev) => {
        onChangeName(ev.target.value);
    }
return (
    <>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" onChange={handleChange} />
    </>
    )
}

export default FilterByName