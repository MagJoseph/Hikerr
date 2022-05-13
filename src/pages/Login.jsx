import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInUser } from "../services/Auth";


const Login = (props) => {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await SignInUser(formValues);
    setFormValues({
      username: "",
      password: "",
    });
    console.log(payload.id);
    localStorage.setItem("user", payload.id);
    props.setUser(payload);
    props.toggleAuthenticated(true);
    navigate("/posts");
  };
  return (
    <div className="register">
      <div className="centered">
        <h1>Hikrr</h1>
        <h2 className="welcome"> Please Log in</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="centered">
            <label htmlFor="email">Username</label>
            <input
              className="input1"
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Your Username"
              value={formValues.username}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              className="input1"
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Your password"
              value={formValues.password}
              required
            />
          </div>
          <button
            className="sub-btn"
            disabled={!formValues.username || !formValues.password}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
