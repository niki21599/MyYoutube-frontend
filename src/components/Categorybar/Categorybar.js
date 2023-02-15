import React from "react";
import CategoryButton from "../CategoryButton/CategoryButton";
import "./Categorybar.css";

export default function Categorybar(props) {
  let MUSIC_ID = 10;
  let GAMING_ID = 20;
  let COMEDY_ID = 23;
  let SPORTS_ID = 17;
  let FILM_ID = 1;
  let NEWS_ID = 25;
  let ENTERTAINMENT_ID = 24;

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
