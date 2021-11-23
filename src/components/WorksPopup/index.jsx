import { useState } from "react";

import { Container, BigInput } from "./styles";

import Input from "../Input";

import { useForm } from "react-hook-form";

import { FaTimes } from "react-icons/fa";

import Button from "../Button";

import { HeadContainer } from "../Registered/styles";

const WorksPopup = ({ setHandleWorks }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <Container>
      <HeadContainer>
        <h3>Cadastrar Trabalho</h3>
        <button onClick={() => setHandleWorks(false)}>
          <FaTimes />
        </button>
      </HeadContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <Input
            label="Nome do trabalho"
            register={register}
            name="title"
            error=""
          />
          <BigInput
            label="Descrição do trabalho"
            register={register}
            name="description"
            error=""
          />
        </section>
        <Button type="submit">Cadastrar</Button>
      </form>
    </Container>
  );
};

export default WorksPopup;
