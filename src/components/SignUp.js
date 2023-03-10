import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { auth, createUserWithEmailAndPassword } from "../firebase/config";

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

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }

  return (
    <FormDiv>
      {" "}
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

<button>SIGN UP</button>
      </form>
    </FormDiv>
  );
}
