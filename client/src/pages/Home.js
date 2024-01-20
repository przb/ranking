import Ranks from "./Ranks";
import ItemForm from "../components/ItemForm";

const Home = () => {


    return (
        <div className={"home"}>
            <h2>Home</h2>
            <span>
            <Ranks/>
            <ItemForm/>
            </span>
        </div>
    )
}

export default Home