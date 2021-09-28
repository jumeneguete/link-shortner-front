import { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Form/Input";
import FormButton from "../../components/Form/Button";
import useApi from "../../hooks/useApi";
import Toast from "../../components/ToastContainer";
import { toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
import { NewUserSchema } from "../../schemas/userSchema";
import validURL from "../../schemas/urlSchema";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const api = useApi();
  const history = useHistory();

  function submitSignUp(e) {
    e.preventDefault();

    const validUserInfo = NewUserSchema.validate({
      name,
      password,
      confirmPassword,
      email,
    });
    const validateURL = validURL(image);

    if (validUserInfo.error || !validateURL) {
      return toast("🟡 Fill in the fields correctly");
    }

    if (password !== confirmPassword) {
      return toast("❗ Passwords must be identicals!");
    }

    const result = api.newUser.signUp(email, password, name, image);

    result.then((response) => {
      toast("🦄 Yuup! You can proceed to login now");
      history.push("/");
    });
    result.catch((error) => {
      if (error.response.status === 401) {
        toast("🟡 Fill in the fields correctly");
      } else {
        toast("❌ Sorry, something went wrong while trying to sign up");
      }
    });
  }

  return (
    <>
      <Form onSubmit={submitSignUp}>
        <Input
          type="text"
          label="email"
          width="350px"
          value={email}
          setValue={setEmail}
        />
        <Input
          type="password"
          label="password"
          width="350px"
          value={password}
          setValue={setPassword}
        />
        <Input
          type="password"
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
      <Toast />
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
