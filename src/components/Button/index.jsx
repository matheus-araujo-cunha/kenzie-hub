import { Container, SecondContainer } from "./styles";

const Button = ({ children, colorDefault, onClick, mini = false }) => {
  return (
    <>
      {mini ? (
        <SecondContainer onClick={onClick} colorDefault={colorDefault}>
          {children}
        </SecondContainer>
      ) : (
        <Container onClick={onClick} colorDefault={colorDefault}>
          {children}
        </Container>
      )}
    </>
  );
};

export default Button;
