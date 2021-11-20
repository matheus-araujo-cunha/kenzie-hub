import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 56px;
  align-items: center;
  font-family: "Inter", sans-serif;
  flex-direction: column;
  max-height: 100vh;
`;

export const Form = styled.form`
  font-family: "Inter", sans-serif;
  display: flex;
  border: 1px solid var(--gray-white);
  width: 80%;
  height: 620px;
  padding: 30px 20px 20px 15px;
  justify-content: space-around;
  flex-direction: column;

  @media (min-width: 600px) {
    width: 40%;
  }
`;
