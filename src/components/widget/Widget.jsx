import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./widget.scss";

const Widget = ({ type }) => {
  const { currentUser } = useContext(AuthContext);
  const title =
    type === "user" 
    ? "Recommended for " +currentUser.displayName 
    : type === "popular" 
    ? "Popular on "
    : "Editor's choice  ";

  const img = type === "user"
      ? process.env.PUBLIC_URL +"/assets/learn.jpg"
      : type === "popular"
      ? process.env.PUBLIC_URL +"/assets/world.jpg"
      : process.env.PUBLIC_URL +"/assets/schoolpupils.jpg";

      const imageLinks = {
        user: "https://www.coursera.org", // Replace with the actual URL you want to link to for "user" type
        popular: "https://popularonline.in/", // Replace with the actual URL you want to link to for "popular" type
        default: "https://www.pcmag.com/editors-choice", // Replace with the actual URL you want to link to for default type
      };

      const imageUrl = imageLinks[type] || imageLinks.default;

      const accessibleText =
    type === "user"
      ? "View recommended content for " + currentUser.displayName
      : type === "popular"
      ? "View popular content"
      : "View Editor's choice content";

  return (
    <div className="widget">
      <span className="rightTitle">{title}</span>
      <a href={imageUrl} aria-label={accessibleText}>
      <img className="rightImg" src={img} alt="" />
      </a>
    </div>
  );
};

export default Widget;
