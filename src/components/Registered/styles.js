import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 800px;

  section {
    display: flex;
    height: 150px;
    flex-direction: column;
    justify-content: space-around;

    h2 {
      font-weight: 600;
      font-size: 1.8rem;
      color: var(--gray-strong);
    }

    h4 {
      color: var(--gray-medium);
      font-weight: 600;
    }

    p {
      color: var(--gray-strong);
    }
  }

  > button {
    width: 90%;
    margin-bottom: 15px;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  width: 90%;
  margin-top: 15px;
  justify-content: space-between;

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  h3 {
    color: var(--gray-strong);
    font-size: 1.3rem;
    font-weight: 600;
  }
`;
