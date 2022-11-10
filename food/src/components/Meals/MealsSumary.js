import classes from './MealsSumary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Have you already tried Italian food taste?</h2>
      <p>Simply scroll down and select which dishes you wish to order.</p>
      <p>
        All our meals are cooked with high-quality ingredients, just in time and
        of course by experienced michelin cheff star!
      </p>
    </section>
  );
};

export default MealsSummary;
