import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  > div {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
      props.colorDefault ? "var(--color-secundary)" : "var(--color-primary)"};
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const SecondContainer = styled.div`
  background-color: var(--gray-medium);
  height: 200px;
`;
