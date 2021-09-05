import styled from 'styled-components';

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;
    &.order,
    &.menu {
      grid-column: span 1;
      font-size: clamp(1.8rem, 2vw, 2rem);
    }
  }
  .mapleSyrup {
    display: none;
  }
  @media (max-width: 900px) {
    fieldset.order,
    fieldset.menu {
      grid-column: span 2;
    }
  }
`;

export default OrderStyles;
