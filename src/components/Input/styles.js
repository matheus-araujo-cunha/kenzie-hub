import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  justify-content: space-around;

  gap: 7px;

  span {
    font-family: "Inter", sans-serif;
    font-size: 0.8rem;
    color: #d32f2f;
    animation: opacityChange ease;

    @keyframes opacityChange {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
  }
`;

export default Container;
