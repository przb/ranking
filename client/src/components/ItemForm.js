import {useState} from "react";
import {useItemsContext} from "../hooks/useItemsContext";

const ItemForm = () => {
    const {dispatch} = useItemsContext()
    const [rank, setRank] = useState(0)
    const [name, setName] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const item = {rank, name}

        const response = await fetch("http://localhost:8080/api/v1/item", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json();
        console.log("response: ", json)

        if (!response.ok) {
            setError(response.error)
        } else if (response.rejected) {
            setError("There was an error")
        } else if (response.ok) {
            setName("")
            setRank(0)
            setError(null)
            console.log("new item added", json)
            dispatch({type: "ADD_ITEM", payload: {...json, ...item} })
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