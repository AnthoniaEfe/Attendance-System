import styled from "styled-components";
import Wave from "react-wavify";

import Form from "../components/Form.js";
const LoginPageContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--clr-white);

  .illustration {
    background-color: blue;
    width: 55vw;
    height: 100vw; 
    position: fixed;
      top: 0;
      left: 0;
      rotate:45deg;
    
  }
`;

const LoginPageForm = styled.div`
  background-color: var(--clr-white);
  height: 85%;
  width: 40%;
  margin: 0 60px;
  padding: 10px;
  align-self: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border: 1px solid var(--clr-white);
  border-radius: 8%;

  img {
    position: relative;
    top: 0;
    left: 0;
    margin: 5px 5px 10px auto;
    width: 80px;
    height: 50px;
    border: none;
    border-radius: none;
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
    <LoginPageContent>
{/*       
      <div className="illustration">
      <Wave
          fill="#fff"
          options={{
            height: 20,
            amplitude: 60,
            speed: 0.1,
            points: 7,
          }}
        />
        
      </div> */}
      <LoginPageForm>
        <h2> Welcome</h2>

        <Form />

        <a href="mailto:#@gmail.com">Contact Helpdesk</a>
        <a href="#">Forgot Password?</a>
      </LoginPageForm>
    </LoginPageContent>
  );
}
