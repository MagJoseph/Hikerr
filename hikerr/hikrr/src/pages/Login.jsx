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
    props.setTeacher(payload);
    props.toggleAuthenticated(true);
    navigate("/posts");
  };
  return (
    <div>
      <Sidebar />
      <div className="login">
        <h1 className="reg-title">MINDIFY</h1>
        <form className="log" onSubmit={handleSubmit}>
          <div className="welcome"> Please Log in</div>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              className="input2"
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Your Username"
              value={formValues.username}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              className="input2"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button
            className="s-btn1"
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
