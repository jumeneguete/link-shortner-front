import { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Form/Input";
import FormButton from "../../components/Form/Button";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  return (
    <Form>
      <Input
        type="text"
        label="email"
        width="350px"
        value={email}
        setValue={setEmail}
      />
      <Input
        type="text"
        label="password"
        width="350px"
        value={password}
        setValue={setPassword}
      />
      <Input
        type="text"
        label="confirmPassword"
        width="350px"
        value={confirmPassword}
        setValue={setConfirmPassword}
      />
      <Input
        type="text"
        label="name"
        width="350px"
        value={name}
        setValue={setName}
      />
      <Input
        type="text"
        label="image"
        width="350px"
        value={image}
        setValue={setImage}
      />
      <FormButton>Sign Up</FormButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
