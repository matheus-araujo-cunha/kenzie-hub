import styled from "styled-components";

const Container = styled.button`
  background-color: ${(props) =>
    props.colorDefault === 1
      ? "var(--color-secundary)"
      : props.colorDefault === 2
      ? "var(--gray-white)"
      : "var(--color-primary)"};
  height: 55px;
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) =>
    props.colorDefault === 2 ? "var(--gray-medium)" : "var(--gray-white)"};
  text-transform: capitalize;
  text-align: center;
  border: 2px solid transparent;
  font-family: "Inter", sans-serif;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    border: 2px solid var(--gray-strong);
  }
`;

export default Container;
