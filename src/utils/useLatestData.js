import React, { useEffect, useState } from 'react';

const gql = String.raw;

const deets = `
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

export default function useLatestData() {
  // HotSlices
  const [hotSlices, setHotSlices] = useState();
  // slicemasters
  const [slicemasters, setSlicemasters] = useState();
  // use a sideeffect to fetch the data from the graphql endpoint
  // const gql = (parts, ...pieces) =>
  //   parts.map((part, i) => `${part}${pieces[i] || ''}`).join('');
  // or you can make VS CODE see the graphql as HTML for the highlighting and formatting by using the below..
  // const gql = String.raw;
  useEffect(function () {
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO: check for errors
        // set the data to state
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.slicemaster);
      })
      .catch((err) => {
        // console.log('SHIIIIEEEET NIGGA!!!!');
      });
  }, []);
  return {
    hotSlices,
    slicemasters,
  };
}
