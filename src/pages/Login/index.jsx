import Button from "../../components/Button";
import Logo from "../../components/Logo";

import { Container, Form } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Redirect } from "react-router-dom";

import { useHistory } from "react-router-dom";

import { toast } from "react-hot-toast";

import Input from "../../components/Input/index";

import api from "../../services/api";

const Login = ({ setAuthenticated, authenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    api.post("/sessions", data).then((response) => {
      const { token, user } = response.data;

      localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
      localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

      // setAuthenticated(true);

      toast.success("Logado com sucesso!");
      return history.push("/dashboard");
    });
    // . => ("Email ou senha inválidos"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          type="password"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <Button colorDefault={0} type="submit">
          Logar
        </Button>
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
