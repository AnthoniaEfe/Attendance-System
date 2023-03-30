import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config.js";

import cartoon1 from "../assets/Delivery.svg";
import cartoon2 from "../assets/Finance.svg";
import abuad from "../assets/COE.jpg";

const FormDiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--clr-white);

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
  div {
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
      margin: 40px 10px;
      font-size: 32px;
    }
    a {
      text-decoration: none;
      color: var(--clr-dark-green);
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      margin: 3px 0;

      &:active {
        text-decoration: 1px underline var(--clr-dark-green);
      }
    }
  }

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

  button {
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

const InfoCard = styled.div`
  background-color: var(--clr-info-red);
  border: 1px solid var(--clr-dark-red);
  border-radius: 2%;
  color: var(--clr-dark-red);
  width: 80%;
  height: 10%;
  padding: 5%;
  margin: 10px auto;

  p {
    background-color: var(--clr-info-red);
  }
`;

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function HandleSubmit(e) {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Check your email for further instructions");
        console.log(message);
        alert(message);
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
        alert(error);
      });
  }

  return (
    <FormDiv>
      <img src={cartoon1} alt="illustration" id="cartoon1" />
      <img src={cartoon2} alt="illustration" id="cartoon2" />
      <img src={abuad} alt="nuesa logo" id="abuad" />
      <div>
        <h2>Password Reset</h2>
        {/* <InfoCard>
          <p>Trial card here!</p>
        </InfoCard> */}
        {/* {error ? (
          <div
            style={{
              backgroundColor: error
                ? "var(--clr-info-red)"
                : message
                ? "var(--clr-blue)"
                : null,
              height: "auto",
              padding: "5%",
              width: "70%",
              margin: "20px auto",
              border: "1px solid var(--clr-dark-red)",
              borderRadius: "2%",
              color: "var(--clr-dark-red)",
            }}
          >
            <p>{error}</p>
          </div>
        ) : null} */}

        <form onSubmit={HandleSubmit}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            value={email}
            required
          />

          <button>Reset Password</button>
          <Link to="/">Back to Login</Link>
        </form>
      </div>
    </FormDiv>
  );
}
