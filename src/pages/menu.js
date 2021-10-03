import { graphql } from 'gatsby';
import React from 'react';
import PizzaList from '../components/PizzaList';
import SEO from '../components/SEO';
import ToppingsFilter from '../components/ToppingsFilter';

export default function PizzasPage({ data, pageContext }) {
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <SEO
        title={
          pageContext.topping
            ? `Meals with ${pageContext.topping}`
            : `All Meals`
        }
      />
      {/* <ToppingsFilter activeTopping={pageContext.topping} /> */}
      <PizzaList pizzas={pizzas} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery($topping: [String]) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { in: $topping } } } }
    ) {
      nodes {
        name
        id
        description
        entree
        riceOrNoodle
        slug {
          current
        }
        toppings {
          id
          name
        }
        price
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
            fixed(width: 200, height: 600) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
