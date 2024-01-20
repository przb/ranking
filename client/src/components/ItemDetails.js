const ItemDetails = ({item}) => {
    const handleClick = async (e) => {
        const id = item.id;

        const response = await fetch("http://localhost:8080/api/v1/item", {
            method: "DELETE",
            body: JSON.stringify({ id }),
            headers: {
                "Content-Type": "application/json"
            }
        })
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