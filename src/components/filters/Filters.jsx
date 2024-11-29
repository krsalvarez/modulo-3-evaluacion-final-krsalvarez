import FilterByName from "./FilterByName"
import FilterBySpecie from "./FilterBySpecie"

function Filters({ onChangeName, onChangeSpecie }) {

    return (
        <form>
            <FilterByName onChangeName={onChangeName} />
            <FilterBySpecie onChangeSpecie={onChangeSpecie} />
        </form>
    )
}

export default Filters