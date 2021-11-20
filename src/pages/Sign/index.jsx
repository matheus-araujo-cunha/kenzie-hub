import Button from "../../components/Button";
import Logo from "../../components/Logo";

import { TextField } from "@material-ui/core";

import { Container, Form } from "./styles";

const Sign = () => {
  console.log("estou aqui");

  return (
    <Container>
      <Logo />
      <Form>
        <TextField />
        <TextField />
        <TextField />
        <TextField />
        <TextField />
        <TextField />
        <TextField />
        <TextField />
        <Button colorDefault={0}>Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Sign;
