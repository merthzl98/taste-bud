import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import axios from "axios";

const AvailableMeals = () => {
  const [dummyMeals, setDummyMeals] = useState([]);
  const fetchMeals = async () => {
    const response = await axios.get(
      "https://react-http-29afe-default-rtdb.firebaseio.com/meals.json"
    );
    const mealsData = response.data;

    const loadedMeals = [];

    for (const key in mealsData) {
      loadedMeals.push({
        id: mealsData[key].id,
        name: mealsData[key].name,
        description: mealsData[key].description,
        price: mealsData[key].price,
      });
    }
    setDummyMeals(loadedMeals);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const mealsList = dummyMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
