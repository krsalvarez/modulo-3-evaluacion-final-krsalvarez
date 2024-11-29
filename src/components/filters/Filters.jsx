import FilterByName from "./FilterByName"
import FilterBySpecie from "./FilterBySpecie"
import FilterByStatus from "./FilterByStatus"

function Filters({ onChangeName, onChangeSpecie, onChangeStatus }) {

    return (
        <form>
            <FilterByName onChangeName={onChangeName} />
            <FilterBySpecie onChangeSpecie={onChangeSpecie} />
            <FilterByStatus onChangeStatus={onChangeStatus}/>
        </form>
    )
}

export default Filters