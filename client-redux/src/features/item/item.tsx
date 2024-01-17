import {getItemsAsync, selectRanks} from "./itemSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useState} from "react";
import styles from '../counter/Counter.module.css';


export {}

export interface Item {
    name: string,
    rank: number,
}

export function RankedItem({item}: { item: Item }) {
    return (
        <div>
            <h1>Welcome to the ranks</h1>
            <h1>Item:</h1>
            <h2>Name: {item.name}</h2>
            <h2>Rank: {item.rank}</h2>
        </div>
    )
}

function AddItem() {
    return (
        <tr>
            <td><input type={"number"}/></td>
            <td><input type={"text"}/></td>
        </tr>
    )
}

export function RankedList() {
    let items = useAppSelector(selectRanks)
    let dispatch = useAppDispatch();

    const [newItems, setItems] = useState("[]");

    return (
        <div>
            <button className={styles.button}
                    // onClick={() => dispatch(getItemsAsync)}
                    >
                Load Ranks
            </button>
        <table className="table table-dark">
            <tbody>
            <tr>
                <th>Rank</th>
                <th>Item</th>
            </tr>
            {items.map(i => <tr>
                <td>{i.rank}</td>
                <td>{i.name}</td>
            </tr>)}
            <AddItem />
            </tbody>
        </table>
        </div>
    )
}