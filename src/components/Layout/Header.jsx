import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo192.png";
import Search from "../Sections/Search";
import DropdownLoggedIn from "../Elements/DropdownLoggedIn";
import DropdownLoggedOut from "../Elements/DropdownLoggedOut";
import { useCart } from "../../context/CartContext";

export default function Header() {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
    const [searchBar, setSearchBar] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const { cartList } = useCart();
    const token = JSON.parse(sessionStorage.getItem("token"));

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        if(darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }            
    }, [darkMode]);

    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Codebook Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <span onClick={() => setDarkMode(!darkMode)} className="text-2xl text-gray-700 dark:text-white cursor-pointer bi bi-gear-wide-connected"></span>
                        <span onClick={() => setSearchBar(!searchBar)} className="text-2xl text-gray-700 dark:text-white cursor-pointer bi bi-search"></span>
                        <Link to="/cart" class="text-gray-700 dark:text-white mr-5">
                            <span class="text-2xl bi bi-cart-fill relative">
                                <span class="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                            </span>
                        </Link>
                        <span onClick={() => setDropdown(!dropdown)} class="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                        { dropdown &&  (token ? <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} />) } 
                    </div>
                </div>
            </nav>
            { searchBar && <Search setSearchBar={setSearchBar}/> }         
        </header>
    )
}