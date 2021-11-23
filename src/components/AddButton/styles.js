import styled from "styled-components";

const Container = styled.button`
  border: none;
  font-size: 1.8rem;
  background-color: ${(props) =>
    props.colorDefault ? "var(--color-secundary)" : "var(--color-primary)"};
  width: 40px;
  height: 34px;
  color: var(--gray-white);
  border-radius: 5px;
  cursor: pointer;
`;

export default Container;
