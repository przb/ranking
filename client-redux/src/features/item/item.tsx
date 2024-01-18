import {getItemsThunk, itemsSlice, removeItem,addItem, selectRanks} from "./itemSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useState} from "react";
import styles from '../counter/Counter.module.css';


export interface Item {
    name: string,
    rank: number,
    id: number,
}


function AddItem() {
    const dispatch = useAppDispatch();

    const input = useState()


    return (
        <tr>
            <td></td>
            <td><input type={"number"}/></td>
            <td><input type={"text"}/></td>
            <td>
                <button
                    className={styles.button}
                    aria-label="Remove Item"
                    onClick={() => dispatch(addItem)}
                >
                    +
                </button>
            </td>
        </tr>
    )
}


function RankedItem({item}: { item: Item }) {
    const dispatch = useAppDispatch();
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.rank}</td>
            <td>{item.name}</td>
            <td>
                <button
                    className={styles.button}
                    aria-label="Remove Item"
                    onClick={() => dispatch(removeItem(item.id))}
                >
                    -
                </button>
            </td>
        </tr>
    )
}

export function RankedList() {
    let items = useAppSelector(selectRanks)
    let dispatch = useAppDispatch();
    const [newItems, setItems] = useState("[]");

    return (
        <div>
            <table className="table table-dark">
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Rank</th>
                    <th>Item</th>
                    <th>add/remove</th>
                </tr>
                {items.map(i => <RankedItem key={i.id} item={i}/>)}
                <AddItem/>
                </tbody>
            </table>
        </div>
    )
}