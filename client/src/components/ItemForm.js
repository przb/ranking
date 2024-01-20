import {useState} from "react";

const ItemForm = () => {
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
        }
    }

    return (
        <form className={"create"} onSubmit={handleSubmit}>
            <h3>Add new Item</h3>
            <label>Item Name: </label>
            <input
                type={"text"}
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <br />
            <label>Item Rank: </label>
            <input
                type={"number"}
                onChange={(e) => setRank(parseInt(e.target.value))}
                value={rank}
            />
            <br />
            <button>Add Item</button>
        </form>
    )
}

export default ItemForm