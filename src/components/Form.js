import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../firebase/config";

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

const Card = styled.div`
  padding: 10px;
  text-align: center;
`;

export default function Form() {
  const navigate = useNavigate();
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function HandleLogin(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("user log in: ", cred.user);

        navigate("/dashboard");
      })
      .catch((err) => console.log(err.message));
    // try {
    //   setError("");
    //   setLoading(true);

    //   console.log("email: ", email, "password: ", password);
    //   await (email, password);
    //   console.log("email: ", email, "password: ", password);
    // } catch {
    //   setError("unable to login");
    // }
    // setLoading(false);

    // console.log("submit");
    // useEffect(() => {
    //   navigate("/dashboard");
    // }, []);

    // console.log("submit2");
  }

  async function HandleSignUp(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("passwords do not match");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          console.log("new user: ", cred.user);

          setEmail("");
          setConfirmPassword("");
          setPassword("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }

  //subscribing to auth changes
  const unSubAuth = onAuthStateChanged(auth, (user) => {
    console.log("user status change: ", user);
  });

  //unsubscribing to auth changes
  unSubAuth();
  return (
    <FormDiv>
      {error && <Card>{error}</Card>}

      {!isNewUser ? (
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

          <button disabled={loading} id="login-page-btn">
            LOGIN
          </button>

          <button className="new-user" onClick={() => setIsNewUser(!isNewUser)}>
            New User?
          </button>
        </form>
      ) : (
        <form onSubmit={HandleSignUp}>
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

          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="confirm password"
            value={confirmPassword}
            required
          />

          <button id="login-page-btn">LOGIN</button>

          <button className="new-user" onClick={() => setIsNewUser(!isNewUser)}>
            Not a new user?
          </button>
        </form>
      )}
    </FormDiv>
  );
}
