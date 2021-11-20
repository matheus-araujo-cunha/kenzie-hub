import Container from "./styles";

const Button = ({ children, colorDefault, onClick }) => {
  return (
    <Container onClick={onClick} colorDefault={colorDefault}>
      {children}
    </Container>
  );
};

export default Button;
