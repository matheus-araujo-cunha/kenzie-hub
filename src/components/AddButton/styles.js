import styled from "styled-components";

const Container = styled.button`
  border: none;
  background-color: ${(props) =>
    props.colorDefault ? "var(--color-secundary)" : "var(--color-primary)"};
  width: 40px;
  height: 34px;
  color: var(--gray-white);
  border-radius: 8px;
`;

export default Container;
