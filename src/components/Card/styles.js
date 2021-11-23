import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  color: var(--gray-strong);
  border-right: 3px solid var(--gray-white);
  gap: 10px;
  height: 80px;

  > div {
    width: 20%;
    height: 90%;

    border-radius: 5px;
    background-color: var(--gray-white);
    color: var(--color-secundary);

    svg {
      text-align: center;
      width: 100%;
    }
  }

  > section {
    height: 70px;
    gap: 20px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      text-transform: capitalize;
    }
  }

  &:hover {
    border-right-color: var(--color-secundary);
    > div {
      background-color: var(--color-secundary);
      color: var(--gray-white);
    }
  }
`;

export const MiniContainer = styled.div`
  width: 40%;
  height: 30px;
  border-radius: 5px;

  > p {
    text-align: center;
    margin-left: 25%;
    font-size: 0.8rem;
  }

  color: var(--color-secundary);
  background-color: var(--gray-white);
`;
