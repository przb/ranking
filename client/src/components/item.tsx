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

export function RankedList({items}: { items: Item[] }) {
    items.sort((a, b) => a.rank - b.rank);
    return (
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
    )
}