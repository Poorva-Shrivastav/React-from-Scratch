import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHook/useOnlineStatus";
import SearchBar from "./SearchBar";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between px-4 shadow-lg fixed top-0 w-full z-50 bg-white">
      <div>
        <Link to="/">
          <img className="w-24" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center justify-evenly">
        <ul className="flex p-4 text-gray-600 text-md ">
          <li className="hover:text-orange-400">
            <SearchBar />
          </li>

          <li className="p-4 hover:text-orange-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4 hover:text-orange-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4 hover:text-orange-400">Cart</li>
          <button
            className="p-4 hover:text-orange-400"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
