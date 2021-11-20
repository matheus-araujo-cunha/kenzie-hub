import styled from "styled-components";

const Container = styled.div`
  width: 150px;
  height: 35px;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  gap: 8px;

  h1 {
    color: var(--gray-strong);
    font-size: 28px;
    font-weight: 600;
  }

  div {
    background-color: var(--color-primary);
    height: 28px;
    width: 45px;
    border-radius: 5px;
  }

  h2 {
    text-align: center;
    line-height: 28px;
    color: var(--gray-white);
  }
`;

export default Container;
