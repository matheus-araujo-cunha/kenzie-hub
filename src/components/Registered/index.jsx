import { Container, HeadContainer } from "./styles";

import { FaTimes } from "react-icons/fa";

import Button from "../Button";

const Registered = ({ onClick }) => {
  return (
    <Container>
      <HeadContainer>
        <h3>Sucesso</h3>
        <button onClick={onClick}>
          <FaTimes />
        </button>
      </HeadContainer>
      <section>
        <h2>Yeesss</h2>
        <h4>Tudo certinho , seu cadastro deu bom demais</h4>
        <p>Agora basta fazer o login e continuar sua jornada...</p>
      </section>
      <Button onClick={onClick}>Ir para o login</Button>
    </Container>
  );
};

export default Registered;
