const ItemDetails = ({item}) => {
    return (<tr>
        <td>{item.rank}</td>
        <td>{item.name}</td>
    </tr>)
}

export default ItemDetails