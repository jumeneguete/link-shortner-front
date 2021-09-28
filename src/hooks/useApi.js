import NewUserApi from "../services/NewUserApi";

export default function useApi(){
    return {
        newUser: new NewUserApi(),
    };
}