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
  const [disabled, setDisabled] = useState(false);

  const api = useApi();
  const history = useHistory();

  function submitSignUp(e) {
    e.preventDefault();
    setDisabled(true);

    const validUserInfo = NewUserSchema.validate({
      name,
      password,
      confirmPassword,
      email,
    });
    const validateURL = validURL(image);

    if (validUserInfo.error || !validateURL) {
      setTimeout(() => setDisabled(false), 3000);
      console.log(validUserInfo.error);
      return toast("🟡 Fill in the fields correctly");
    }

    const result = api.newUser.signUp(email, password, name, image);

    result.then(() => {
      setDisabled(false);
      history.push("/");
    });
    result.catch((error) => {
      setTimeout(() => setDisabled(false), 3000);
      if (error.response.status === 401) {
        toast("🟡 Fill in the fields correctly");
      } else if (error.response.status === 409) {
        toast("🟡 E-mail already registered");
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
          disabled={disabled}
        />
        <Input
          type="password"
          label="password"
          width="350px"
          value={password}
          setValue={setPassword}
          disabled={disabled}
        />
        <Input
          type="password"
          label="confirmPassword"
          width="350px"
          value={confirmPassword}
          setValue={setConfirmPassword}
          disabled={disabled}
        />
        <Input
          type="text"
          label="name"
          width="350px"
          value={name}
          setValue={setName}
          disabled={disabled}
        />
        <Input
          type="text"
          label="image"
          width="350px"
          value={image}
          setValue={setImage}
          disabled={disabled}
        />
        <FormButton disabled={disabled}>Sign Up</FormButton>
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
