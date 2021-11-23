import styled from "styled-components";

import Input from "../Input";

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 92%;
  }

  form {
    margin-top: 10px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: space-evenly;

    > div {
      margin-top: 10px;
      gap: 20px;
      display: flex;
      flex-direction: column;
      margin-bottom: 0;
    }

    > section {
      display: flex;
      gap: 10px;
    }
  }
`;

export const BigInput = styled(Input)`
  input {
    height: 80px;
  }
`;
