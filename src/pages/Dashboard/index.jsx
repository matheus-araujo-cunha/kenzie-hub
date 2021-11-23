import { Container, HeadPage, Content, Techs, Works, Profile } from "./styles";

import Logo from "../../components/Logo";

import AddButton from "../../components/AddButton";

import DefaultImg from "../../assets/null.svg";

import api from "../../services/api";

import Card from "../../components/Card";

import Popup from "../../components/Popup";

import { FaMobile, FaBox, FaFileWord } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { Redirect } from "react-router-dom";

import TechPopup from "../../components/TechPopup";
import WorksPopup from "../../components/WorksPopup";

import { useState } from "react";

import jwtDecode from "jwt-decode";

import Button from "../../components/Button";

import CardProfile from "../../components/CardProfile";

const Dashboard = ({ isAuthenticated, setIsAuthenticated }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const [tokenDecode] = useState(jwtDecode(token));

  const [user] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );

  const loadTechs = () => {
    api
      .get(`/users/${tokenDecode.sub}`)
      .then((response) => setAllTechs(response.data.techs));
  };

  const loadWorks = () => {
    api
      .get(`/users/${tokenDecode.sub}`)
      .then((response) => setAllWorks(response.data.works));
  };

  const [handleTech, setHandleTech] = useState(false);
  const [handleWorks, setHandleWorks] = useState(false);

  const [allTechs, setAllTechs] = useState(user.techs);
  const [allWorks, setAllWorks] = useState(user.works);

  const [idTech, setIdTech] = useState("");
  const [idWork, setIdWork] = useState("");

  const [isUptade, setIsUptade] = useState(false);
  const [isUptadeWork, setIsUptadeWork] = useState(false);

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
          <TechPopup
            loadTechs={loadTechs}
            setHandleTech={setHandleTech}
            isUptade={isUptade}
            token={token}
            idTech={idTech}
          />
        </Popup>
      )}
      {handleWorks && (
        <Popup>
          <WorksPopup
            loadWorks={loadWorks}
            setHandleWorks={setHandleWorks}
            isUptadeWork={isUptadeWork}
            token={token}
            idWork={idWork}
          />
        </Popup>
      )}
      <HeadPage>
        <Logo />
        <img src={user.avatar_url === null && DefaultImg} alt={user.name} />
      </HeadPage>
      <Content>
        <Techs>
          <div>
            <h2>Minhas tecnologias</h2>{" "}
            <AddButton
              onClick={() => {
                setHandleTech(true);
                setIsUptade(false);
              }}
              colorDefault={true}
            >
              +
            </AddButton>
          </div>
          <section>
            {allTechs.length > 0 &&
              allTechs.map(({ id, title, status }) => (
                <Card
                  onClick={() => {
                    setHandleTech(true);
                    setIsUptade(true);
                    setIdTech(id);
                  }}
                  icon={FaBox}
                  key={id}
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
            <AddButton
              onClick={() => {
                setHandleWorks(true);
                setIsUptadeWork(false);
              }}
            >
              +
            </AddButton>
          </div>
          <section>
            {allWorks.length > 0 &&
              allWorks.map(({ id, title, description }) => (
                <Card
                  onClick={() => {
                    setHandleWorks(true);
                    setIsUptadeWork(true);
                    setIdWork(id);
                  }}
                  icon={FaFileWord}
                  key={id}
                  title={title}
                  description={description}
                />
              ))}
          </section>
        </Works>
        <Profile>
          <section>
            <img src={user.avatar_url === null && DefaultImg} alt={user.name} />
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
