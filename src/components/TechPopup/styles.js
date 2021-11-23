import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    margin-top: 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    > section {
      display: flex;

      gap: 10px;
    }
  }
`;

export const SectionSelect = styled.div`
  color: var(--gray-strong);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;

  p {
    font-size: 0.8rem;
  }

  div {
    width: 100%;
  }
`;
