import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import PizzaList from '../components/PizzaList';
import SEO from '../components/SEO';
import ToppingsFilter from '../components/ToppingsFilter';

export default function PizzasPage({ data, pageContext }) {
  const pizzas = data.pizzas.nodes;
  const [toggleFilter, setToggleFilter] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        console.log('we are in mobile now');
        setToggleFilter(false);
      } else {
        setToggleFilter(true);
      }
    }

    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <SEO
        title={
          pageContext.topping
            ? `Meals with ${pageContext.topping}`
            : `All Meals`
        }
      />

      <button
        type="button"
        style={{ marginBottom: '1rem' }}
        onClick={() => setToggleFilter(!toggleFilter)}
      >
        {toggleFilter ? 'Filter -' : 'Filter +'}
      </button>

      {toggleFilter && <ToppingsFilter activeTopping={pageContext.topping} />}
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
