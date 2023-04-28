import styled from "styled-components";
import cartoon1 from "../assets/Delivery.svg";
import cartoon2 from "../assets/Finance.svg";
import blob from "../assets/blob.svg";
import abuad from "../assets/COE.jpg";

import { AuthProvider } from "../context/AuthContext";
import Login from "../components/Login.js";
import { useState } from "react";
import SignUp from "../components/SignUp";
import { Link } from "react-router-dom";

const LoginPageContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--clr-white);

  #blob {
    position: absolute;
    height: 50px;
    width: 50px;
    bottom: 0;
    left: 0;
  }

  #cartoon1 {
    top: 10px;
    left: 10px;
    position: absolute;
    height: 240px;
    width: 240px;
  }

  #cartoon2 {
    position: absolute;
    height: 240px;
    width: 240px;
    bottom: 10px;
    right: 60px;
  }

  #abuad {
    position: absolute;
    height: 100px;
    top: 5px;
    right: 5px;
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

  .new-user {
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

const LoginPageForm = styled.div`
  background-color: var(--clr-white);
  height: 85%;
  width: 40%;
  margin: 10px 60px;
  padding: 10px;
  align-self: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border: 1px solid var(--clr-white);
  border-radius: 8%;

  h2 {
    margin: 20px 10px;
    font-size: 32px;
  }
  a {
    text-decoration: none;
    color: var(--clr-dark-green);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin: 5px 0;

    &:active {
      text-decoration: 1px underline var(--clr-dark-green);
    }
  }
`;

const Card = styled.div`
  padding: 10px;
  text-align: center;
`;

const Loading = styled.div`
  padding: 10px;
  text-align: center;
`;

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <AuthProvider>
      <LoginPageContent>
        <img src={cartoon1} alt="illustration" id="cartoon1" />
        <img src={cartoon2} alt="illustration" id="cartoon2" />
        <img src={blob} alt="blob" id="blob" />
        <img src={abuad} alt="nuesa logo" id="abuad" />

        {error && <Card>{error}</Card>}
        {loading && <Loading>{loading}</Loading>}

        <LoginPageForm>
          <h2> Welcome </h2>

          {!isNewUser ? (
            <>
              <Login />

              <button
                className="new-user"
                onClick={() => setIsNewUser(!isNewUser)}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <SignUp />

              <button
                className="new-user"
                onClick={() => setIsNewUser(!isNewUser)}
              >
                Login
              </button>
            </>
          )}

          <a href="mailto:#@gmail.com">Contact Helpdesk</a>
          <Link to="/forgot-password">Forgot Password?</Link>
        </LoginPageForm>
      </LoginPageContent>
    </AuthProvider>
  );
}
