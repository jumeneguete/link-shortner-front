import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <>
      <ContainerStyle>
        <Logo>Link Shortner</Logo>
        <Title>Sign Up</Title>
        <SignUpForm></SignUpForm>
        <GoToLogin>
          <Link to="/">Already have an account? Go to Login.</Link>
        </GoToLogin>
      </ContainerStyle>
    </>
  );
}
const ContainerStyle = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-family: "Alfa Slab One", cursive;
  font-size: 38px;
  color: #f4c64f;
  margin: 80px 0 30px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bolder;
  color: #f4c64f;
  margin-bottom: 20px;
`;

const GoToLogin = styled.div`
  color: #f4c64f;
  text-decoration: underline;
  margin: 25px 0 50px;
`;
