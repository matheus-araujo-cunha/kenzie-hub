import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 0;
  left: 0;

  > div {
    position: relative;
    top: 20%;
    transform: translateY(-20%);
    margin: 0 auto;
    height: 60vh;
    width: 100%;
    max-width: 550px;
    background-color: #fff;

    button {
      text-transform: none;
    }
  }
`;

export default Container;
