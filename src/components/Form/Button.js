import Button from "@mui/material/Button";
import styled from "styled-components";

export default function FormButton({ children }) {
  return (
    <StyledButton variant="contained" type="submit" size="large">{children}</StyledButton>
  );
}

const StyledButton = styled(Button)`
  width: 200px;
  color: #fff !important;
  font-weight: bolder !important;
  background-color: #F4C64F !important;
  margin-top: 15px !important;
`;

