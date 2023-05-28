import axios from "axios";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

for (let i=0, l= DUMMY_MEALS.length ; l>i; i++ ) {
  axios
  .post(
    "https://react-http-29afe-default-rtdb.firebaseio.com/meals.json",
    DUMMY_MEALS[i]
  )
  .then((response) => {
    console.log(response.status);
    console.log(response.DUMMY_MEALS.token);
  });
}

