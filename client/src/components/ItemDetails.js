import {useItemsContext} from "../hooks/useItemsContext";
import {DELETE_ITEM} from "../actions/ItemActions";
import {webCall} from "../webc"

const ItemDetails = ({item}) => {
    let {dispatch} = useItemsContext()
    const handleClick = async (e) => {
        const id = item.id;

        const url = `/api/v1/item`;
        console.log("making DELETE request to ", url)

        const response = await webCall("DELETE", url,{ id });

        if (response.ok) {
            dispatch({type: DELETE_ITEM, payload: id});
        }
    }

    return (<tr>
        <td>{item.rank}</td>
        <td>{item.name}</td>
        <td>
            <button
                onClick={handleClick}
                className={"btn btn-secondary"}
            >
                -
            </button>
        </td>
    </tr>)
}

export default ItemDetails