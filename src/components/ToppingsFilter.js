import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    display: grid;
    text-decoration: none;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: 5px;
    gap: 0 1rem;
    background: var(--grey);
    border-radius: 3px;
    font-size: clamp(1.5rem, 1.4vw, 2.5rem);

    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current="page"] {
      background: var(--yellow);
    }
  }
`;

function countPizzasInToppings(pizzas) {
  // return the pizzas with counts
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if existing topping
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        // if existing topping, increment by 1
        existingTopping.count += 1;
      } else {
        // otherwise create a new entry in our acc and set it to 1
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  // sort them based on their counts
  // const counts1 = pizzas.map((pizza) => pizza.toppings).flat();
  // console.log(counts1);

  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}

export default function ToppingsFilter({ activeTopping }) {
  // get a list of all the toppings
  // get a list of all the pizzas with their toppings
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);
  console.clear();
  // count how many pizzas are in each topping
  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);

  return (
    <ToppingsStyles>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
      </Link>
      {/* loop over list of toppings and display the topping and the count of
      pizzas in that topping */}
      {toppingsWithCounts.map((topping) => (
        <Link
          to={`/topping/${topping.name}`}
          key={topping.id}
          className={topping.name === activeTopping ? "active" : ""}
        >
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingsStyles>
  );
}
