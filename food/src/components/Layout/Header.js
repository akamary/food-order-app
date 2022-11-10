import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import Classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={Classes.header}>
        <h1>Food App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={Classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
