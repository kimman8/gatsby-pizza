import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const SingleSlicemasterStyles = styled.div`
  border: solid 1px var(--yellow);
  padding: 2rem;
  text-align: center;
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 400px;
  }
  h2 {
    transform: rotate(-2deg);
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--yellow);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    position: relative;
    z-index: 2;
    transform: rotate(1deg);
  }
`;
const SlicemasterGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;
export default function SlicesmastersPage({ data }) {
  const slicemasters = data.slicemasters.nodes;
  console.log(slicemasters);
  return (
    <div>
      <SlicemasterGridStyles>
        {slicemasters.map((slicemaster) => (
          <SingleSlicemasterStyles>
            <Link
              to={`slicemaster/${slicemaster.slug.current}`}
              key={slicemaster.id}
            >
              <h2>
                <span className="mark">{slicemaster.name}</span>
              </h2>
            </Link>
            <Img fluid={slicemaster.image.asset.fluid} alt="" />
            <p className="description">{slicemaster.description}</p>
          </SingleSlicemasterStyles>
        ))}
      </SlicemasterGridStyles>
    </div>
  );
}

export const query = graphql`
  query {
    slicemasters: allSanityPerson {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
