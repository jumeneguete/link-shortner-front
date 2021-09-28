import TextField from "@mui/material/TextField";
import styled from "styled-components";

export default function Input({ label, type, width, value, setValue, disabled }) {
  return (
    <StyledTextField
      type={type}
      label={label}
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      inputwidth={width}
      disabled={disabled}
    />
  );
}

const StyledTextField = styled(TextField)`
  width: ${(props) => props.inputwidth };
  margin-top: 8px !important;
`;
