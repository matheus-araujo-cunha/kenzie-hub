import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* justify-content: space-between; */
`;

export const HeadPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin-top: 10px;
  height: 80px;
  padding: 0 20px;
  box-shadow: 0 0 5px black;

  div {
    margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */

  flex-direction: column;

  margin-top: 30px;

  width: 85%;
  @media (min-width: 650px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Techs = styled.div`
  padding: 10px;
  display: flex;
  width: 28vw;
  flex-direction: column;
  justify-content: space-between;

  border: 2px solid var(--gray-white);
  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Works = styled.div`
  padding: 10px;
  display: flex;
  width: 28vw;
  flex-direction: column;
  justify-content: space-between;

  border: 2px solid var(--gray-white);
  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Profile = styled.div`
  /* padding: 10px; */
  display: flex;

  height: 500px;
  width: 22vw;
  flex-direction: column;
  justify-content: space-between;

  section {
    background-color: var(--color-primary);
    display: flex;
    justify-content: space-between;
    color: var(--gray-white);
    text-align: left;

    div {
      display: flex;
      flex-direction: column;

      h2,
      h4,
      span,
      p {
        margin-left: 8px;
        width: inherit;
      }
    }
  }

  border: 2px solid var(--gray-white);
  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;
