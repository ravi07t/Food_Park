import { useState } from "react";
import { TbLogin2 } from "react-icons/tb";
import { TbLogin } from "react-icons/tb";

const Header = () => {
  const [btnName, setBtnName] = useState(
    <div className="login-icon">
      <TbLogin /> Login
    </div>
  );

  return (
    <div className="header">
      <div className="logo-container">
        <img src="./src/images/logo.jpg" alt="" className="logo-image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Conatact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setBtnName((prev) =>
                prev.props.className === "login-icon" ? (
                  <div className="logout-icon">
                    <TbLogin /> Logout
                  </div>
                ) : (
                  <div className="login-icon">
                    <TbLogin2 /> Login
                  </div>
                )
              );
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
