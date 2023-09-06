import "./navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";
import Update from "./../../components/update/Update";


const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">RotraX</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="Search for something..."
              className="searchInput"
              
              />
           
          </div>
        </div>
        <update>
        <div className="navbarRight">
          <img className="profileImg" src={ currentUser.photoURL ? currentUser.photoURL : "./assets/Profile.png"} alt=""/>
          

          <span className="navbarName">
          <h4>Profile</h4>
            <Link to ="/Update">{currentUser.displayName}</Link></span>
          
        </div>
        </update>
      </div>
    </div>
  );
};

export default Navbar;
