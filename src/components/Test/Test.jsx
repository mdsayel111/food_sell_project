import { Outlet } from "react-router-dom";


const Test = () => {
    return (
        <div>
            <h1>Test</h1> 
            <Outlet></Outlet>           
        </div>
    );
};

export default Test;