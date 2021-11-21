import { styled } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Container from "./styles";

const TextStyled = styled(TextField)(() => ({
  "& label.Mui-focused": {
    color: "#999",
  },

  width: "inherit",

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "8px",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#333",
    },
  },
}));

const Input = ({ register, error, name, ...rest }) => {
  return (
    <Container>
      {!!error && <span>{error}</span>}
      <TextStyled error={!!error} {...register(name)} {...rest} />
    </Container>
  );
};

export default Input;
