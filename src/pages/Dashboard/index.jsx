import { Container, HeadPage, Content, Techs, Works, Profile } from "./styles";

import Logo from "../../components/Logo";

import AddButton from "../../components/AddButton";

import DefaultImg from "../../assets/null.svg";

import api from "../../services/api";

import Card from "../../components/Card";

import Popup from "../../components/Popup";

import { FaMobile, FaBox } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { Redirect } from "react-router-dom";

import TechPopup from "../../components/TechPopup";
import WorksPopup from "../../components/WorksPopup";

import { useState, useEffect } from "react";

import Button from "../../components/Button";

import CardProfile from "../../components/CardProfile";

const Dashboard = ({ isAuthenticated, setIsAuthenticated }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );

  const [handleTech, setHandleTech] = useState(false);
  const [handleWorks, setHandleWorks] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
  };

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      {handleTech && (
        <Popup>
          <TechPopup setHandleTech={setHandleTech} />
        </Popup>
      )}
      {handleWorks && (
        <Popup>
          <WorksPopup setHandleWorks={setHandleWorks} />
        </Popup>
      )}
      <HeadPage>
        <Logo />
        <img src={token.avatar_url === null && DefaultImg} alt={token.name} />
      </HeadPage>
      <Content>
        <Techs>
          <div>
            <h2>Minhas tecnologias</h2>{" "}
            <AddButton onClick={() => setHandleTech(true)} colorDefault={true}>
              +
            </AddButton>
          </div>
          <section>
            {token.techs.length === 0
              ? null
              : token.techs.map(({ title, status }, index) => (
                  <Card
                    icon={FaBox}
                    title={title}
                    status={status}
                    isTechs={true}
                  />
                ))}
          </section>
        </Techs>
        <Works>
          <div>
            <h2>Meus trabalhos</h2>{" "}
            <AddButton onClick={() => setHandleWorks(true)}>+</AddButton>
          </div>
          <section>
            {token.techs.length === 0
              ? null
              : token.works.map(({ title, description }) => (
                  <Card
                    icon={FaBox}
                    title={title}
                    description={description}
                    isTechs={false}
                  />
                ))}
          </section>
        </Works>
        <Profile>
          <section>
            <img
              src={token.avatar_url === null && DefaultImg}
              alt={token.name}
            />
            <div>
              <h2>{token.name}</h2>
              <h4>{token.course_module} módulo</h4>
              <p>Introdução ao FrontEnd</p>
            </div>
          </section>

          <CardProfile
            profile={false}
            icon={FaMobile}
            text="Ligar agora"
            contact={token.contact}
          />
          <CardProfile
            colorDefault={true}
            icon={FiMail}
            text="Enviar e-mail"
            email={token.email}
          ></CardProfile>

          <Button colorDefault={2} onClick={() => logout()}>
            Sair
          </Button>
        </Profile>
      </Content>
    </Container>
  );
};

export default Dashboard;
