import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
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

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();

  async function HandleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your email for further instructions");
    } catch {
      setError("unable to send password reset email");

      //temp mail for temporary email
    }
    setLoading(false);

    console.log("submit");
    useEffect(() => {
      navigate("/dashboard");
    }, []);
  }

  function HandleReset() {}

  return (
    <FormDiv>
      {error && <Card>{error}</Card>}
      {message && <Card>{message}</Card>}

      <form onSubmit={HandleSubmit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          value={email}
          required
        />

        <button id="login-page-btn" onClick={HandleReset}>
          Reset Password
        </button>
        <Link to="/">Back to Login</Link>
      </form>
    </FormDiv>
  );
}
