import {useItemsContext} from "../hooks/useItemsContext";
import serverConfig from "../config.json"
import {DELETE_ITEM} from "../actions/ItemActions";

const ItemDetails = ({item}) => {
    let {dispatch} = useItemsContext()
    const handleClick = async (e) => {
        const id = item.id;

        const url = `http://${serverConfig.serverAddress}:${serverConfig.serverPort}/api/v1/item`;
        console.log("making DELETE request to ", url)

        const response = await fetch(url, {
            method: "DELETE",
            body: JSON.stringify({ id }),
            headers: {
                "Content-Type": "application/json"
            }
        })

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