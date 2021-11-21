import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 56px;
  align-items: center;
  font-family: "Inter", sans-serif;
  flex-direction: column;
`;

export const Form = styled.form`
  font-family: "Inter", sans-serif;
  display: flex;
  border: 1px solid var(--gray-white);
  width: 80%;
  height: 750px;
  padding: 30px 20px 20px 15px;
  justify-content: space-around;
  flex-direction: column;
  margin-bottom: 20px;
  opacity: ${(props) => (props.submit ? 0.9 : 1)};

  section {
    width: 100%;
    display: flex;
    width: 100%;
    justify-content: space-around;

    button {
      min-width: 6vw;
      max-width: 60px;
    }
  }

  @media (min-width: 765px) {
    width: 40vw;

    section {
      button {
        min-width: 8vw;
        max-width: 120px;
      }
    }
  }
`;
