import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <div className="logo">
            <div className="echo">Echo</div>
          </div>
          <div className="headphone-icon"></div>
        </div>
        <button type="button" className="cart-icon">
          <AiOutlineShopping />
          <span className="cart-item-qty">1</span>
        </button>
      </div>
    </>
  );
};

export default NavBar;
