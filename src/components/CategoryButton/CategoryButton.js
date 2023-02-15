import React from "react";
import Button from "@mui/material/Button";
import "./CategoryButton.css";
import { getCategoryId } from "../../utils/helpers";

export default function CategoryButton(props) {
  let changeActive = () => {
    props.setActive(props.category);
    props.searchByCategory(getCategoryId(props.category));
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
