import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";
import { useEffect, useState } from "react";
import { getUser } from "../../services/dataService";
import { toast } from "react-toastify";

export default function DropdownLoggedIn ({ setDropdown }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            try {
                const data = await getUser();
                data.email ? setUser(data) : handleLogout();
            } catch (err) {
                toast.error(err.message, {position: "bottom-center"});
            }            
        }
        
        getData();
    }, [])

    function handleLogout() {
        logout();
        setDropdown(false);
        navigate("/");
    }

  return (
    <div id="dropdownAvatar" className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate">{user.email || ""}</div>
        </div>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
                <Link onClick={() => setDropdown(false)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
            </li>
            <li>
                <Link onClick={() => setDropdown(false)} to="/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
        </ul>
        <div className="py-1">
            <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
        </div>
    </div>
  )
}