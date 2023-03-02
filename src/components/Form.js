import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const FormDiv = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }

  input {
    width: 80%;
    padding: 5px;
    height: 30px;
    margin: 5px auto;
    align-self: center;
    color: var(--clr-darkest-grey);
    border: 1px solid var(--clr-darker-grey);
    border-radius: 10px;
  }

  #login-page-btn {
    width: 80%;
    margin: 10px auto;
    padding: 5px;
    height: 40px;
    color: white;
    font-weight: 800px;
    font-size: 16px;
    text-transform: uppercase;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 10px;
    background-color: var(--clr-dark-green);

    &:hover {
      transform: scale(1.04);
    }
  }

  .admin-btn {
    align-self: center;
    width: auto;
    margin: 0px auto 10px;
    padding: 7px;
    border: 1px solid var(--clr-dark-green);
    border-radius: 10px;
    color: var(--clr-dark-green);
    background-color: white;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const Card = styled.div`
  padding: 10px;
  text-align: center;
`;

export default function Form() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("unable to login");
    }
    setLoading(false);

    console.log("submit");
    navigate("/dashboard");
  }

  return (
    <FormDiv>
      {error && <Card>{error}</Card>}

      {!isAdmin ? (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            value={email}
            required
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
            required
          />

          <button disabled={loading} id="login-page-btn">
            LOGIN/SIGN UP
          </button>
          {/* <NavLink to="/dashboard" activeClassName="active">
            LOGIN
          </NavLink> */}

          <button className="admin-btn" onClick={() => setIsAdmin(!isAdmin)}>
            Admin?
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            value={email}
            required
          />

          <input
            type="number"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin ID"
            value={email}
            required
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
            required
          />

          <button id="login-page-btn">LOGIN</button>

          <button className="admin-btn" onClick={() => setIsAdmin(!isAdmin)}>
            Not an Admin?
          </button>
        </form>
      )}
    </FormDiv>
  );
}
