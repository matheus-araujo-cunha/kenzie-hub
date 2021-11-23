import styled from "styled-components";

const Container = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 1.8rem;
  background-color: ${(props) =>
    props.colorDefault ? "var(--color-secundary)" : "var(--color-primary)"};
  width: 40px;
  height: 34px;
  color: var(--gray-white);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-white);
    border: 2px solid
      ${(props) =>
        props.colorDefault ? "var(--color-secundary)" : "var(--color-primary)"};
    color: ${(props) =>
      props.colorDefault ? "var(--color-secundary)" : "var(--color-primary)"};
  }
`;

export default Container;
