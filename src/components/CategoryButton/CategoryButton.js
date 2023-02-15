import React from "react";
import Button from "@mui/material/Button";
import "./CategoryButton.css";

export default function CategoryButton(props) {
  let changeActive = () => {
    props.setActive(props.category);
    props.searchByCategory(getCategoryId(props.category));
  };

  let getCategoryId = (cat) => {
    let MUSIC_ID = 10;
    let GAMING_ID = 20;
    let COMEDY_ID = 23;
    let SPORTS_ID = 17;
    let FILM_ID = 1;
    let NEWS_ID = 25;
    let ENTERTAINMENT_ID = 24;
    if (cat == "All") {
      return ENTERTAINMENT_ID;
    }
    if (cat == "Sports") {
      return SPORTS_ID;
    }
    if (cat == "Film") {
      return FILM_ID;
    }
    if (cat == "Comedy") {
      return COMEDY_ID;
    }
    if (cat == "Music") {
      return MUSIC_ID;
    }
    if (cat == "Gaming") {
      return GAMING_ID;
    }
    if (cat == "News") {
      return NEWS_ID;
    }
  };

  return (
    <div>
      {/* When Active --> send Active class with it */}
      <Button
        onClick={changeActive}
        className={
          (props.active ? "categoryButton active" : "categoryButton") +
          (props.category == "Film" ||
          props.category === "Comedy" ||
          props.category === "Gaming"
            ? " responsive-Button"
            : "")
        }
        variant="outlined"
      >
        {props.category}
      </Button>
    </div>
  );
}
