import {useEffect, useState} from "react";
import ItemDetails from "../components/ItemDetails";
import {useItemsContext} from "../hooks/useItemsContext";

const Ranks = () => {
    // const [items, setItems] = useState(null)
    const {items, dispatch} = useItemsContext()

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('http://localhost:8080/api/v1/items')
            const json = await response.json();
            if (response.ok) {
                dispatch({type: "SET_ITEMS", payload: json})
            }

        }
        fetchItems()
    }, []);

    return (<table className={"table table-striped table-bordered"}>
        <thead>
        <tr>
            <th scope={"col"}>Rank</th>
            <th scope={"col"}>Item</th>
            <th scope={"col"}></th>
        </tr>
        </thead>

        <tbody>
        {items && items.map((i) => {
            return (<ItemDetails item={i} key={i.id}/>)
        })}

        </tbody>
    </table>)

}

export default Ranks