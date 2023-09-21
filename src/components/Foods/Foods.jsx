import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food"


const Foods = () => {
    const {categories} = useLoaderData()
    return (
        <div className="grid mt-8 grid-cols-3">
            {
                categories.map((item,index) => <Food key={index} item={item}></Food>)
            }
        </div>
    );
};

export default Foods;