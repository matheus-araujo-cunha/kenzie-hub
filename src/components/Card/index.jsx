import { Container, MiniContainer, IconContent } from "./styles";

const Card = ({
  title,
  status,
  icon: Icon,
  isTechs,
  description,
  defaultColor = true,
  onClick,
}) => {
  return (
    <Container isTechs={isTechs} onClick={onClick}>
      <IconContent isTechs={isTechs} description={description}>
        {Icon && <Icon size={20} />}
      </IconContent>
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
