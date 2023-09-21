import { Link } from "react-router-dom";

const Food = ({item}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={item.strCategoryThumb} alt="Shoes" /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{item.strCategory}</h2>
                    <p>{item.strCategoryDescription?.length > 100 ? item.strCategoryDescription.slice(0,100) : item.strCategoryDescription }</p>
                    <p>price : </p>
                    <div className="card-actions">
                    <Link to={`./foods/${item.strCategory}`}><button className="btn btn-primary">See all this type food</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;