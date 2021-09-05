import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const PizzaStyles = styled.div`
  position: relative;
  display: grid;
  /*take your template row sizing not from PizzaStyles but from PizzaGridStyles*/
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: default;
    transform: rotate(-2deg) translateY(-30px);
  }
`;

function SinglePizza({ pizza }) {
  console.log(pizza);
  return (
    <PizzaStyles>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
      </Link>
      {/* <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p> */}
      <p>{pizza.description}</p>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
      <div>
        {pizza.entree ? (
          <button type="button">{formatMoney(pizza.price)} ea</button>
        ) : (
          ['S', 'L'].map((size, index) => (
            <button type="button" key={index}>
              {size} {formatMoney(calculatePizzaPrice(pizza.price, size))}
            </button>
          ))
        )}
      </div>
    </PizzaStyles>
  );
}
export default function PizzaList({ pizzas }) {
  return (
    <PizzaGridStyles>
      {pizzas.map((pizza) => (
        <SinglePizza pizza={pizza} key={pizza.id} />
      ))}
    </PizzaGridStyles>
  );
}
