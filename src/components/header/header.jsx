import { useRef, useState } from "react";
import {AiOutlineClose} from "react-icons/ai";



const Header = ({cart}) => {
    console.log(cart)
    const cartDiv = useRef();
    const [isCartOpen, setisCartOpen] = useState(false)
    function cartDisplay(){
        isCartOpen ? cartDiv.current.classList = "hidden" : cartDiv.current.classList="bg-[#E5E6E6] absolute z-[100] top-[62px] p-4 rounded-xl w-[400px]" || cartDiv.current.classList.remove("hidden")
        setisCartOpen(prevIsCartOpen => !prevIsCartOpen)
    }
    return (
        <header className="z-[1001] relative">
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img src="https://img.freepik.com/free-vector/vector-cartoon-illustration-traditional-set-fast-food-meal_1441-331.jpg?w=740&t=st=1695106557~exp=1695107157~hmac=ccc6cf8f06ea2fc0d776dd7fa9a86a996668030e7b3bd188dd62da3f97ecf4d3" alt="" className="w-[50px]"/></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn" onClick={cartDisplay}>
                    {
                        isCartOpen ? <AiOutlineClose className="h-[30px] w-[30px]"></AiOutlineClose> : "Cart"
                    }
                </a>
                <div ref={cartDiv} className="hidden">
                    {
                        cart.map((item,indx) => <div key={indx}>{indx+1}. {item.strMeal}</div>)
                    }
                </div>
            </div>
            </div>
        </header>
    );
};

export default Header;