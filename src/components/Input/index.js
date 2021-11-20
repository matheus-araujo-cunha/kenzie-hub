import { styled } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const TextStyled = styled(TextField)(() => ({
  "& label.Mui-focused": {
    color: "#999",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "8px",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#333",
    },
  },
}));

export default TextStyled;
