import Ranks from "./Ranks";
import ItemForm from "../components/ItemForm";

const Home = () => {


    return (
        <div className={"home"}>
            <h2>Home</h2>
            <div className={"container"}>
                <div className={"row align-items-start"}>
                    <div className={"col"}>
                        <Ranks/>
                    </div>
                    <div className={"col"}>
                        <ItemForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home