import axios from "axios";

export const login = async (credential) => {
    return await axios.post("api/auth/login", {
        email: credential.email,
        password: credential.password
    });
}

export const register = async (credential) => {
    return await axios.post("api/auth/signup", {
        email: credential.email,
        password: credential.password,
        firstName: credential.firstName,
        lastName: credential.lastName
    });
}