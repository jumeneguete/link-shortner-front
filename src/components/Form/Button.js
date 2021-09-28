import Button from "@mui/material/Button";
import styled from "styled-components";

export default function FormButton({ children, disabled }) {
  return (
    <StyledButton
      variant="contained"
      type="submit"
      size="large"
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  width: 200px;
  color: #fff !important;
  font-weight: bolder !important;
  margin-top: 15px !important;
  background-color: ${(props) =>
    props.disabled ? "#ccc" : "#F4C64F"} !important;
  cursor: ${(props) =>
    props.disabled ? "not-allowed" : "pointer"} !important;
`;
