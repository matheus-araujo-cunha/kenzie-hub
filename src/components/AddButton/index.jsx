import Container from "./styles";

const AddButton = ({ children, colorDefault, ...rest }) => {
  return (
    <Container colorDefault={colorDefault} {...rest}>
      {children}
    </Container>
  );
};

export default AddButton;
