import { useState } from "react";

import { Container, BigInput } from "./styles";

import Input from "../Input";

import { useForm } from "react-hook-form";

import { FaTimes } from "react-icons/fa";

import Button from "../Button";

import { HeadContainer } from "../Registered/styles";

import api from "../../services/api";

import { toast } from "react-hot-toast";

const WorksPopup = ({
  setHandleWorks,
  isUptadeWork,
  token,
  loadWorks,
  idWork,
}) => {
  const { register, handleSubmit } = useForm();

  const [titleWork, setTitleWork] = useState({ title: "", description: "" });
  const [descriptionWork, setDescriptionWork] = useState("");

  const onRegister = (data) => {
    if (data.title === "" || (data.description === "" && !isUptadeWork)) {
      toast.error("Preencha os campos antes de enviar");
    }

    data.deploy_url = "kenziehub.me";

    !isUptadeWork &&
      api
        .post("/users/works", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => {
          toast.success("Adicionado com sucesso!");
          loadWorks();
        })
        .catch((err) => console.log(err));
  };

  const onUptade = (twork, tdisc, id) => {
    if (twork === "" && tdisc === "") {
      toast.error("Preencha um dos campos antes de salvar");
    }

    const data = { title: twork, description: tdisc };

    api
      .put(`/users/works/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Atualizado com sucesso");
        loadWorks();
      })
      .catch((err) => console.log(err));
  };

  const onDelete = (id) => {
    console.log("id aqui =>", id);

    api
      .delete(`users/works/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Excluído com sucesso");
        loadWorks();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <HeadContainer>
        <h3>Cadastrar Trabalho</h3>
        <button onClick={() => setHandleWorks(false)}>
          <FaTimes />
        </button>
      </HeadContainer>
      <form onSubmit={handleSubmit(onRegister)}>
        <div>
          <Input
            label="Nome do trabalho"
            register={register}
            name="title"
            error=""
            onChange={(ev) => {
              setTitleWork(ev.target.value);
            }}
          />
          <BigInput
            label="Descrição do trabalho"
            register={register}
            name="description"
            error=""
            onChange={(ev) => setDescriptionWork(ev.target.value)}
          />
        </div>
        {isUptadeWork ? (
          <section>
            {" "}
            <Button
              colorDefault={1}
              onClick={() => onUptade(titleWork, descriptionWork, idWork)}
              type="submit"
            >
              Salvar alterações
            </Button>{" "}
            <Button
              colorDefault={2}
              onClick={() => onDelete(idWork)}
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

export default WorksPopup;
