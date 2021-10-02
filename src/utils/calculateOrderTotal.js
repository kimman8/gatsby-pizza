import calculateMainsPrice from './calculateMainsPrice';

export default function calculateOrderTotal(order, pizzas) {
  // loop over each item in the order
  const total = order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find((pizza) => pizza.id === singleOrder.id);
    // calc the total for that pizza
    // add that total to the running total
    return runningTotal + calculateMainsPrice(pizza.price, singleOrder.size);
  }, 0);
  return total;
}
