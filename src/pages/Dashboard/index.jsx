import { Container, HeadPage, Content, Techs, Works, Profile } from "./styles";

import Logo from "../../components/Logo";

import AddButton from "../../components/AddButton";

import api from "../../services/api";

import { FaMobile } from "react-icons/fa";

import { useState, useEffect } from "react";

import Button from "../../components/Button";

import Card from "../../components/Card";

const Dashboard = () => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );

  console.log(token);

  return (
    <Container>
      <HeadPage>
        <Logo />
        <p>aaaa</p>
      </HeadPage>
      <Content>
        <Techs>
          <div>
            <h2>Minhas tecnologias</h2>{" "}
            <AddButton colorDefault={true}>+</AddButton>
          </div>
        </Techs>
        <Works>
          <div>
            <h2>Meus trabalhos</h2> <AddButton>+</AddButton>
          </div>
        </Works>
        <Profile>
          <section>
            <img src={token.avatar_url} alt={token.name} />
            <div>
              <h2>{token.name}</h2>
              <h4>{token.course_module} módulo</h4>
              <p>Introdução ao FrontEnd</p>
            </div>
          </section>
          <div>
            <Card profile={false}>
              <div colorDefault={true}>
                <FaMobile />
              </div>
              <section>
                <h3>Ligar agora</h3>
                <span>{token.contact}</span>
              </section>
            </Card>
            <Card colorDefault={false}></Card>
          </div>
          <Button colorDefault={2} onClick={() => {}}>
            Sair
          </Button>
        </Profile>
      </Content>
    </Container>
  );
};

export default Dashboard;
