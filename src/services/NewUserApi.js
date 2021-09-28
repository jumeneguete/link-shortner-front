import api from "./api";

export default class NewUserApi {
  signUp(email, password, name, image) {
    return api.post("/sign-up", { email, password, name, image });
  }
}
