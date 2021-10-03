import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import calculateMainsPrice from '../utils/calculateMainsPrice';
import calculateRiceNoodlePrice from '../utils/calculateRiceNoodlePrice';
import formatMoney from '../utils/formatMoney';

const PizzaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export default function SinglePizzaPage({ data: { pizza } }) {
  return (
    <>
      <SEO title={pizza.name} image={pizza.image?.asset?.fluid?.src} />
      <PizzaGrid>
        <Img fluid={pizza.image.asset.fluid} />
        <div>
          <h2 className="mark">{pizza.name}</h2>
          <ul>
            {pizza.toppings.map((topping) => (
              <li key={topping.id}>{topping.name}</li>
            ))}
          </ul>
          <div>
            {pizza.entree ? (
              <button type="button" style={{ cursor: 'default' }}>
                {formatMoney(pizza.price)} ea
              </button>
            ) : (
              [
                pizza.riceOrNoodle
                  ? ['S', 'L'].map((size, index) => (
                      <button
                        type="button"
                        key={index}
                        style={{ cursor: 'default' }}
                      >
                        {size}{' '}
                        {formatMoney(
                          calculateRiceNoodlePrice(pizza.price, size)
                        )}
                      </button>
                    ))
                  : ['S', 'L'].map((size, index) => (
                      <button
                        type="button"
                        key={index}
                        style={{ cursor: 'default' }}
                      >
                        {size}{' '}
                        {formatMoney(calculateMainsPrice(pizza.price, size))}
                      </button>
                    )),
              ]
            )}
          </div>
        </div>
      </PizzaGrid>
    </>
  );
}

// this needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      price
      entree
      riceOrNoodle
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
