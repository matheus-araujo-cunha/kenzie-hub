import { Container, MiniContainer } from "./styles";

const Card = ({
  title,
  status,
  icon: Icon,
  isTechs,
  description,
  defaultColor = true,
}) => {
  return (
    <Container>
      <div defaultColor={defaultColor}>{Icon && <Icon size={20} />}</div>
      <section>
        <h2>{title}</h2>
        {isTechs ? (
          <MiniContainer>
            <p>{status}</p>
          </MiniContainer>
        ) : (
          <p>{description}</p>
        )}
      </section>
    </Container>
  );
};

export default Card;
