import styled from 'styled-components';

const MenuItemStyles = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 1.3rem;
  align-content: center;
  align-items: center;
  border: 1px solid var(--grey);

  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100%;
  }

  /* .butty {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  } */
  /* button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    font-size: 1.5rem;
  } */
  button + button {
    margin-left: 1rem;
  }
  h2 {
    margin: 0;
  }

  .remove {
    background: none;
    color: var(--red);
    font-size: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: none;
    line-height: 1rem;
  }
`;

export default MenuItemStyles;
