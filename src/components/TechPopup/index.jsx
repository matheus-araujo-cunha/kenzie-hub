import { useState } from "react";

import { Container, SectionSelect } from "./styles";

import { FaTimes } from "react-icons/fa";

import Button from "../Button";

import Input from "../Input";

import { Select, MenuItem } from "@material-ui/core";

import { HeadContainer } from "../Registered/styles";

import { useForm } from "react-hook-form";

const TechPopup = ({ setHandleTech }) => {
  const { register, handleSubmit } = useForm();

  const allStatus = ["Iniciante", "Intermediário", "Avançado"];

  const [isRegistered, setIsRegistered] = useState(true);

  const onPost = () => {};

  const onDelete = () => {};

  return (
    <Container>
      <HeadContainer>
        <h3>Cadastrar tecnologia</h3>
        <button onClick={() => setHandleTech(false)}>
          <FaTimes />
        </button>
      </HeadContainer>
      <form
        onSubmit={isRegistered ? handleSubmit(onPost) : handleSubmit(onDelete)}
      >
        <Input label="Nome da tech" register={register} name="title" error="" />
        <SectionSelect>
          <p>Selecionar status:</p>
          <Select {...register("status")}>
            {allStatus.map((element) => (
              <MenuItem key={element} value={element}>
                {element}
              </MenuItem>
            ))}
          </Select>
        </SectionSelect>
        <section>
          <Button
            colorDefault={1}
            onClick={() => setIsRegistered(true)}
            type="submit"
          >
            Salvar alterações
          </Button>
          <Button
            colorDefault={2}
            onClick={() => setIsRegistered(false)}
            type="submit"
          >
            Excluir
          </Button>
        </section>
      </form>
    </Container>
  );
};

export default TechPopup;
