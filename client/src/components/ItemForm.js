import {useState} from "react";
import {useItemsContext} from "../hooks/useItemsContext";
import {ADD_ITEM} from "../actions/ItemActions";
import {webCall} from "../webc"

const ItemForm = () => {
    const {dispatch} = useItemsContext()
    const [rank, setRank] = useState(0)
    const [name, setName] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const item = {rank, name}
        const url = `/api/v1/item`;
        console.log("making POST request to ", url)
        const json = await webCall("POST", url, item);
        console.log("response: ", json)
        const response = json;
        console.log(json);
        if (!response.ok) {
            setError(response.error)
        } else if (response.rejected) {
            setError("There was an error")
        } else if (response.ok) {
            setName("")
            setRank(0)
            setError(null)
            console.log("new item added", json)
            dispatch({type: ADD_ITEM, payload: {...json, ...item} })
        }
    }

    return (
        <form className={"create"} onSubmit={handleSubmit}>
            <legend>Add new Item</legend>
            <div className={"mb-3"}>
                <label
                    htmlFor={"itemName"}
                    className={"form-label"}>
                    Item Name:
                </label>
                <input
                    type={"text"}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={"form-control"}
                    id={"itemName"}
                />
            </div>

            <div className={"mb-3"}>
                <label
                    htmlFor={"itemRank"}
                    className={"form-label"}>
                    Item Rank:
                </label>
                <input
                    type={"number"}
                    onChange={(e) => setRank(parseInt(e.target.value))}
                    value={rank}
                    className={"form-control"}
                    id={"itemRank"}
                />
            </div>
            <button type={"submit"} className={"btn btn-primary"}>Add Item</button>
        </form>
    )
}

export default ItemForm