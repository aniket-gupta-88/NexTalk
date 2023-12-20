import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const [typePass, setTypePass] = useState(false);

  const { auth } = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.token) navigate("/");
  }, [auth.token, navigate]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    dispatch(login(userData));
  };

  return (
    <div className="auth_page">
      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <h3 className="text-uppercase">NexTalk</h3>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChangeInput}
              name="email"
              value={email}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <div className="pass">
              <input
                type={typePass ? "text" : "password"}
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChangeInput}
                name="password"
                value={password}
              />
              <small onClick={() => setTypePass(!typePass)}>
                {typePass ? "Hide" : "Show"}
              </small>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark w-100"
            disabled={email && password ? false : true}
          >
            Login
          </button>
          <p className="my-2">
            You don't have an account?
            <Link to="/register" style={{ color: "crimson" }}>
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
