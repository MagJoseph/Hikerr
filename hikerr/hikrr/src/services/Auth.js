import Client from "./api";


// Set the current signed in users token to localStorage
export const SignInUser = async (data) => {
  try {
    const res = await Client.post("login", data);
   localStorage.setItem("token", res.data.token);
    return res.data.user;
  } catch (error) {
    throw error;
  }
};
