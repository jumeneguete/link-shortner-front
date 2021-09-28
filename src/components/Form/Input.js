import TextField from "@mui/material/TextField";
import styled from "styled-components";

export default function Input({ label, type, width, value, setValue }) {
  return (
    <StyledTextField
      type={type}
      label={label}
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      inputwidth={width}
    />
  );
}

const StyledTextField = styled(TextField)`
  width: ${(props) => props.inputwidth };
  margin-top: 8px !important;
`;
