import React from "react";
import CategoryButton from "../CategoryButton/CategoryButton";
import "./Categorybar.css";

export default function Categorybar(props) {
  let [active, setActive] = React.useState("All");

  let searchByCategory = (cat) => {
    props.searchByCategory(cat);
  };

  let categories = [
    "All",
    "Music",
    "Gaming",
    "Sports",
    "News",
    "Comedy",
    "Film",
  ];
  return (
    <div className="categorybar">
      {categories.map((cat) => (
        <CategoryButton
          key={cat}
          category={cat}
          active={active === cat}
          setActive={setActive}
          searchByCategory={searchByCategory}
        />
      ))}
    </div>
  );
}
