import Button from "../../components/Button";
import Logo from "../../components/Logo";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

import { toast } from "react-hot-toast";

import Input from "../../components/Input/index";

import { Redirect } from "react-router-dom";

import { Select, MenuItem } from "@material-ui/core";

import api from "../../services/api";

import Popup from "../../components/Popup";
import Registered from "../../components/Registered";

import { useState } from "react";

import { Container, Form } from "./styles";

const Sign = ({ isAuthenticated }) => {
  const [submit, setSubmit] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    confirm_email: yup.string().oneOf([yup.ref("email")], "Emails diferentes"),
    password: yup.string().required("Senha obrigatória"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const modules = ["Primeiro", "Segundo", "Terceiro", "Quarto"];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module = "primeiro",
  }) => {
    const user = { name, email, password, bio, contact, course_module };

    console.log(user);

    api
      .post("/users", user)
      .then((response) => {
        setSubmit(true);
      })
      .catch((err) => toast.error("Email ou senha"));
  };

  const history = useHistory();

  if (isAuthenticated) {
    <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Logo />
      {submit && (
        <Popup>
          <Registered
            onClick={() => {
              history.push("/");
              setSubmit(false);
            }}
          />
        </Popup>
      )}
      <Form submit={submit} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nome"
          register={register}
          name="name"
          error={errors.name?.message}
        />
        <Input
          label="Email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          label="Confirme o email"
          register={register}
          name="confirm_email"
          error={errors.confirm_email?.message}
        />
        <Input
          label="Bio"
          register={register}
          name="bio"
          error={errors.bio?.message}
        />
        <Input
          label="Contato"
          register={register}
          name="contact"
          error={errors.contact?.message}
        />
        <p>Selecionar módulo:</p>
        <Select {...register("course_module")}>
          {modules.map((element) => (
            <MenuItem key={element} value={element}>
              {element}{" "}
            </MenuItem>
          ))}
        </Select>
        <Input
          label="Senha"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <Input
          label="Confirme a senha"
          register={register}
          name="confirm_password"
          error={errors.confirm_password?.message}
        />
        <Button type="submit" colorDefault={0}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Sign;
