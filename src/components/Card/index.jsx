import { Container, SecondContainer } from "./styles";

const Card = ({ profile, contact, email, colorDefault, ...rest }) => {
  return (
    <>
      {profile ? (
        <Container colorDefault={colorDefault} {...rest}></Container>
      ) : (
        <SecondContainer
          colorDefault={colorDefault}
          contact={contact}
          email={email}
        ></SecondContainer>
      )}
    </>
  );
};

export default Card;
