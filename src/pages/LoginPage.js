import styled from "styled-components";
import cartoon1 from "../assets/Delivery.svg";
import cartoon2 from "../assets/Finance.svg";
import blob from "../assets/blob.svg";
import abuad from "../assets/COE.jpg";

import Form from "../components/Form.js";
import { AuthProvider } from "../context/AuthContext";
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
    /* width: 40px; */
    top: 5px;
    right: 5px;
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
    margin: 60px 10px 10px;
    font-size: 32px;
    /* font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ; */
  }
  a {
    text-decoration: none;
    color: var(--clr-dark-green);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin: 3px 0;

    &:active {
      text-decoration: 1px underline var(--clr-dark-green);
    }
  }
`;

export default function LoginPage() {
  return (
    <AuthProvider>
      <LoginPageContent>
        <img src={cartoon1} alt="illustration" id="cartoon1" />
        <img src={cartoon2} alt="illustration" id="cartoon2" />
        <img src={blob} alt="blob" id="blob" />
        <img src={abuad} alt="nuesa logo" id="abuad" />

        <LoginPageForm>
          <h2> Welcome </h2>

          <Form />

          <a href="mailto:#@gmail.com">Contact Helpdesk</a>
          <a href="#">Forgot Password?</a>
        </LoginPageForm>
      </LoginPageContent>
    </AuthProvider>
  );
}
