import { Container, SecondContainer } from "./styles";

const CardProfile = ({
  profile,
  contact,
  email,
  icon: Icon,
  colorDefault,
  text,
  ...rest
}) => {
  return (
    <Container colorDefault={colorDefault}>
      <div>{Icon && <Icon size={20} />}</div>

      <section>
        <h3>{text}</h3>
        <span>{contact || email}</span>
      </section>
    </Container>
  );
};

export default CardProfile;
