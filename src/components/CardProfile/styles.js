import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 10px;
  margin: 10px 5px;
  gap: 20px;
  width: 90%;
  box-sizing: border-box;

  height: 65px;
  border-radius: 5px;
  background-color: var(--gray-white);

  > div {
    width: 16%;
    box-sizing: border-box;
    border-radius: 4px;
    height: 80%;
    color: var(--gray-white);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
      props.colorDefault ? "var(--color-secundary)" : "var(--color-primary)"};

    svg {
      border-color: white;
    }
  }

  > section {
    gap: 0;
    color: var(--gray-strong);
    display: flex;
    padding: 0;
    margin: 0;
    height: inherit;
    flex: 1;
    background-color: inherit;
    flex-direction: column;

    justify-content: center;
  }
`;
