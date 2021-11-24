import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin-top: 10px;
  height: 80px;
  padding: 0 20px;
  box-shadow: 0 4px 40px -10px var(--gray-medium);

  img {
    max-width: 60px;
  }

  div {
    margin: 0;
  }

  @media (max-width: 760px) {
    width: 100%;
    margin-top: 0;
    min-height: 80px;

    img {
      max-width: 40px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 30px;

  width: 85%;
  @media (max-width: 760px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Techs = styled.div`
  color: var(--gray-strong);
  padding: 10px;
  display: flex;
  width: 28vw;
  flex-direction: column;
  justify-content: flex-start;

  border: 2px solid var(--gray-white);
  div {
    display: flex;

    align-items: center;

    justify-content: space-between;
  }

  > section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const Works = styled.div`
  padding: 10px;
  display: flex;
  width: 28vw;
  flex-direction: column;
  justify-content: flex-start;

  border: 2px solid var(--gray-white);
  div {
    display: flex;
    align-items: center;

    justify-content: space-between;
  }

  > section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const Profile = styled.div`
  display: flex;

  height: 500px;
  width: 24vw;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  section {
    background-color: var(--color-primary);
    width: 100%;
    display: flex;
    padding: 10px 15px;
    border-radius: 8px;
    gap: 20px;
    color: var(--gray-white);
    text-align: left;
    margin-bottom: 20px;

    div {
      display: flex;
      flex-direction: column;
      height: 70px;
      justify-content: space-evenly;

      h2,
      h4,
      p {
        width: inherit;
      }

      h2 {
        text-transform: capitalize;
        margin-bottom: 5px;
      }

      h4,
      p {
        font-size: 0.8rem;
      }

      p {
        color: var(--gray-medium);
      }
    }
  }

  button {
    margin-top: 10px;
    width: 90%;
  }

  border: 2px solid var(--gray-white);

  @media (max-width: 760px) {
    width: 100%;
  }
`;
