import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../firebase/config";

const FormDiv = styled.div`
  width: 100%;
  margin-top: 20px;

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
    border: none;
    border-bottom: 1px solid var(--clr-darker-grey);
    /* border-radius: 10px; */
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

  button {
    width: 80%;
    margin: 10px auto;
    padding: 5px 10px;
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
`;

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function HandleLogin(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("user log in: ", cred.user);

        navigate("/attendance");
      })
      .catch((err) => console.log(err.message));
  }
  //subscribing to auth changes
  // const unSubAuth = onAuthStateChanged(auth, (user) => {
  //   console.log("user status change: ", user);
  // });

  //unsubscribing to auth changes
  // unSubAuth();

  return (
    <FormDiv>
      <form onSubmit={HandleLogin}>
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

        <button>LOGIN</button>
      </form>
    </FormDiv>
  );
}
