import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";

const CatagoryFood = ({item}) => {
    const [cart,setCart] = useContext(CartContext)
    function handleCart(){
        setCart(prevCart => [...prevCart,item])
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={item.strMealThumb} alt="Shoes" /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{item.strMeal}</h2>
                    <p>{item.strCategoryDescription?.length > 100 ? item.strCategoryDescription.slice(0,100) : item.strCategoryDescription }</p>
                    <div className="card-actions">
                    <button className="btn btn-primary" onClick={handleCart}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatagoryFood;