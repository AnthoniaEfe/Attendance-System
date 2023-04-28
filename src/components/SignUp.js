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

  #title-div,
  #name-div {
    display: flex;
    flex-direction: row;
    align-items: space-evenly;
    justify-content: space-evenly;
    justify-items: space-between;
  }

  input {
    width: 80%;
    /* margin: 0px 5px; */
    padding: 5px;
    /* height: 30px; */
    /* margin: 5px auto; */
    align-self: center;
    color: var(--clr-darkest-grey);
    border: none;
    border-bottom: 1px solid var(--clr-darker-grey);
    /* border-radius: 10px; */
  }

  button {
    width: 80%;
    margin: 10px auto;
    padding: 5px 10px;
    /* height: 40px; */
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
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  async function HandleSignUp(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("passwords do not match");
      console.log("passwords do not match");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          // console.log("new user: ", cred.user);

          setTitle("");
          setFirstName("");
          setLastName("");
          setEmail("");
          setConfirmPassword("");
          setPassword("");

          navigate("/dashboard");
        })
        .then((userCredential) => {
          userCredential.user.updateProfile({
            displayName: firstName,
          });

          console.log(userCredential.user.updateProfile);
        })
        .catch((err) => {
          setError(err.message);
          console.log(err.message);
        })
        .catch((err) => {
          console.log("username could not be updated");
        });
    }
  }

  return (
    <FormDiv>
      {" "}
      {error ? <p>error is {error}</p> : null}
      <form onSubmit={HandleSignUp}>
        <div id="title-div">
          {" "}
          <input
            type="checkbox"
            id="mr"
            name="mr"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label HTMLFor="mr">Mr.</label>
          <input
            type="checkbox"
            name="mrs"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label HTMLFor="mrs">Mrs.</label>
          <input
            type="checkbox"
            name="dr"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label HTMLFor="dr">Dr.</label>
          <input
            type="checkbox"
            name="engr"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label HTMLFor="engr">Engr.</label>
          <input
            type="checkbox"
            name="prof"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label HTMLFor="prof">Prof.</label>
        </div>
        <div id="name-div">
          <input
            type="options"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            value={firstName}
            required
          />
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            value={lastName}
            required
          />
        </div>
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
          placeholder="Confirm password"
          value={confirmPassword}
          required
        />

        <button>SIGN UP</button>
      </form>
    </FormDiv>
  );
}
