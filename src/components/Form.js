import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

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
      background-color: var(--clr-green);
      transform: scale(1.04);
    }
  }

  .admin-btn {
    align-self: center;
    width: 80px;
    padding: 5px;
    border: 1px solid var(--clr-dark-green);
    border-radius: 10px;
    color: var(--clr-dark-green);
    background-color: white;
    cursor: pointer;

    &:hover {
      background-color: var(--clr-hover-green);
      color: white;
    }
  }
`;

export default function Form() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    navigate("/dashboard");
  };

  return (
    <FormDiv>
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

          <button id="login-page-btn">LOGIN</button>

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

          <button className="admin-btn" onClick={() => setIsAdmin(!isAdmin)}>
            Not an Admin?
          </button>
        </form>
      )}
    </FormDiv>
  );
}
