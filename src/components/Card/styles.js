import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  color: var(--gray-strong);
  border-right: 3px solid var(--gray-white);
  gap: 10px;
  height: 80px;

  > section {
    height: 70px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h2 {
      text-transform: capitalize;
    }
  }

  &:hover {
    border-right-color: ${(props) =>
      props.isTechs ? "var(--color-secundary)" : "var(--color-primary)"};
    > div {
      background-color: ${(props) =>
        props.isTechs ? "var(--color-secundary)" : "var(--color-primary)"};

      svg {
        color: var(--gray-white);
      }
    }
  }
`;

export const MiniContainer = styled.div`
  width: 40%;
  height: 30px;
  border-radius: 5px;

  > span {
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
  }

  color: var(--color-secundary);
  background-color: var(--gray-white);
`;

export const IconContent = styled.div`
  width: 20%;
  height: 90%;
  border-radius: 5px;
  background-color: var(--gray-white);
  color: var(--color-secundary);

  svg {
    text-align: center;
    color: ${(props) =>
      props.isTechs ? "var(--color-secundary)" : "var(--color-primary)"};
    width: 100%;
  }
`;
