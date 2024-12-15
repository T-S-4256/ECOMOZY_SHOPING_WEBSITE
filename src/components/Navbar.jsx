import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";



const Navbar = (props) => {

    const [click, setClick] = useState(false)
    const setSearchItem = props.setSearchItem
    const [search, setSearch] = useState('');
    const cart = useSelector((state) => state.cart || []);
    const [totalItem, setTotalItem] = useState(0);
    useEffect(() => {
        setTotalItem(cart.length);
    }, [cart])


    function changeHandler(event) {
        setSearch(event.target.value);
    }

    function clickHandler() {
        setSearchItem(search)
        setClick(true);
    }

    function clearHandler() {
        setSearchItem('')
        setSearch('')
        setClick(false)
    }
    return (
        <div className="navbar_main_wrapper">

            <div className="navbar_wrapper">
                <NavLink to='/'>
                    <div className="nav_left_section">
                        <img src="./images/logo.png" alt="logo" className="nav_logo" />
                    </div>
                </NavLink>
                <div className="searchInput_container">
                    <input type="text" placeholder="Search The Items" value={search} onChange={changeHandler} className="searchInput" />
                    {
                        click ? <RxCross2 className="searInput_icon" onClick={clearHandler} /> : <IoSearch className="searInput_icon" onClick={clickHandler} />
                    }
                </div>

                <div className="nav_right_section">
                    <NavLink to="/" className="navlink">
                        <p className="nav_home">Home</p>
                    </NavLink>

                    <NavLink to="/cart" className="navlink">
                        <div className="nav_icon_container">
                            <FaShoppingCart className="nav_icon" />
                            <div className="CartNumber">{totalItem}</div>
                        </div>
                    </NavLink>

                </div>
            </div>

        </div>
    )
}

export default Navbar;