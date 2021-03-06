import calculateMainsPrice from './calculateMainsPrice';
import formatMoney from './formatMoney';

export default function attachNamesAndPrices(order, pizzas) {
  return order.map((item) => {
    const pizza = pizzas.find((pizza) => pizza.id === item.id);
    return {
      ...item,
      name: pizza.name,
      price: formatMoney(calculateMainsPrice(pizza.price, item.size)),
      thumbnail: pizza.image.asset.fluid.src,
    };
  });
}
