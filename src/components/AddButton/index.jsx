import Container from "./styles";

const AddButton = ({ children, colorDefault }) => {
  return <Container colorDefault={colorDefault}>{children}</Container>;
};

export default AddButton;
