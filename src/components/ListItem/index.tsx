import React from "react";
import "./ListItem.css";

interface ListItemProp {
  title: string;
  caption: string;
  imageUrl: string;
}
const ListItem = ({ title, caption, imageUrl }: ListItemProp) => {
  return (
    <div className="list-item-container">
      <div className="left">
        <img src={imageUrl} className="thumbnail" alt="img" />
      </div>
      <div className="center">
        <h4>{title}</h4>
        <p>{caption}</p>
      </div>
      <div className="right">
        <p>&#8250;</p>
      </div>
    </div>
  );
};
export default ListItem;
