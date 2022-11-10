import { Fragment } from "react";

import MealsSummary from "./MealsSumary.js";
import AvailableMeals from "./AvailableMeals.js";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
