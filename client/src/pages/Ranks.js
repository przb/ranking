import {useEffect, useState} from "react";
import ItemDetails from "../components/ItemDetails";

const Ranks = () => {
    const [items, setItems] = useState(null)

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('http://localhost:8080/api/v1/items')
            const json = await response.json();
            if (response.ok) {
                setItems(json)
            }

        }
        fetchItems()
    }, []);

    return (<table className={"items"}>
            <tbody>
            <tr>
                <th>Rank</th>
                <th>Item</th>
            </tr>

            {items && items.map((i) => {
                return (<ItemDetails item={i} key={i.id}/>)
            })}

            </tbody>
        </table>)

}

export default Ranks