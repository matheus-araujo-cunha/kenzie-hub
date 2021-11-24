import { useState } from "react";

import { Container, SectionSelect } from "./styles";

import { FaTimes } from "react-icons/fa";

import Button from "../Button";

import Input from "../Input";

import { toast } from "react-hot-toast";

import { Select, MenuItem } from "@material-ui/core";

import { HeadContainer } from "../Registered/styles";

import { useForm } from "react-hook-form";

import api from "../../services/api";

const TechPopup = ({ setHandleTech, isUptade, token, loadTechs, idTech }) => {
  const { register, handleSubmit } = useForm();

  const [textStatus, setTextStatus] = useState({ status: "" });

  const allStatus = ["Iniciante", "Intermediário", "Avançado"];

  const onUptade = (data, id) => {
    api
      .put(`/users/techs/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Atualizado com sucesso!");
        loadTechs();
      })
      .catch((err) => toast.error("Preencha os campos antes de enviar"));
  };

  const onDelete = (id) => {
    api
      .delete(`users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Excluído com sucesso");
        loadTechs();
      })
      .catch((err) => console.log(err));
  };

  const onRegister = (data) => {
    !isUptade &&
      api
        .post("/users/techs", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => {
          toast.success("Adicionado com sucesso!");
          loadTechs();
        })
        .catch((_) => toast.error("Essa tecnologia já existe em seu perfil"));
  };

  return (
    <Container>
      <HeadContainer>
        <h3>Cadastrar tecnologia</h3>
        <button onClick={() => setHandleTech(false)}>
          <FaTimes />
        </button>
      </HeadContainer>
      <form onSubmit={handleSubmit(onRegister)}>
        <Input label="Nome da tech" register={register} name="title" error="" />
        <SectionSelect>
          <p>Selecionar status:</p>
          <Select
            {...register("status")}
            onChange={(ev) => setTextStatus({ status: ev.target.value })}
          >
            {allStatus.map((element) => (
              <MenuItem key={element} value={element}>
                {element}
              </MenuItem>
            ))}
          </Select>
        </SectionSelect>

        {isUptade ? (
          <section>
            {" "}
            <Button
              colorDefault={1}
              onClick={() => {
                onUptade(textStatus, idTech);
              }}
              type="submit"
            >
              Salvar alterações
            </Button>{" "}
            <Button
              colorDefault={2}
              onClick={() => {
                onDelete(idTech);
              }}
              type="submit"
            >
              Excluir
            </Button>{" "}
          </section>
        ) : (
          <Button colorDefault={0} type="submit" onClick={() => {}}>
            Cadastrar
          </Button>
        )}
      </form>
    </Container>
  );
};

export default TechPopup;
