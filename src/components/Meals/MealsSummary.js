import classes from "./MealsSummary.module.css";
import pizzaImage from "../../assets/pizza.jpg";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <img src={pizzaImage} alt="pizza" />
      <div className={classes.description}>
        <h2>Delicious Food</h2>
        <p>
          Welcome to TasteBud, where we bring the world of culinary delight
          right to your doorstep. Delve into a world of flavors and convenience
          with our diverse selection of mouthwatering meals. Whether you're in
          the mood for a quick lunch or a delectable dinner, we've got you
          covered.
        </p>
      </div>
    </section>
  );
};

export default MealsSummary;
