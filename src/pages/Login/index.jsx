import Button from "../../components/Button";
import Logo from "../../components/Logo";

import { Container, Form } from "./styles";

import { useHistory } from "react-router-dom";

import TextStyled from "../../components/Input";

const Login = () => {
  const history = useHistory();

  return (
    <Container>
      <Logo />
      <Form>
        <TextStyled label="Email" />
        <TextStyled label="Senha" type="password" />
        <Button colorDefault={0}>Logar</Button>
        <p>
          Criar uma página para mostrar suas{" "}
          <span>habilidades metas e progresso</span>
        </p>
        <Button onClick={() => history.push("/sign")} colorDefault={2}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
