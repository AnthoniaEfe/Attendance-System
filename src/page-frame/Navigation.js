import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, auth } from "../firebase/config.js";

import {
  AiOutlineSetting,
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineArrowLeft,
} from "react-icons/ai";

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 5px;
  width: auto;
  background-color: var(--clr-dark-green);

  div {
    display: flex;
    flex-direction: column;
    margin-top: 5px auto;
    justify-content: space-between;
    padding: 0px auto;
    width: 100%;
    height: 28%;
    /* background-color: blue; */
  }

  #logout {
    position: relative;
    bottom: 0;
  }

  button {
    margin: 15px auto;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: white;
    font-size: 17px;

    &:hover {
      cursor: pointer;
      transform: scale(1.02);
      transform: rotate(10deg);
    }
  }
`;
const iconStyles = {
  fontSize: "18px",
  color: "var(--clr-white)",
  margin: "0 auto",
  fontWeight: "700",
};
export default function Navigation() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function HandleLogOut() {
    signOut(auth)
      .then(() => {
        console.log("user logged out");
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });

    navigate("/");
  }

  function BackOne() {
    useEffect(() => {
      navigate(-1);
    }, []);
  }

  return (
    <NavBar>
      <div>
        <button onClick={BackOne}>
          <AiOutlineArrowLeft style={iconStyles} />
        </button>

        <button onClick={BackOne}>
          <AiOutlineUser style={iconStyles} />
        </button>

        <button onClick={BackOne}>
          <AiOutlineBell style={iconStyles} />
        </button>

        <button onClick={BackOne}>
          <AiOutlineSetting style={iconStyles} />
          {/* add update email and password dropdowns here */}
        </button>
      </div>
      <button onClick={HandleLogOut} id="logout">
        <AiOutlineLogout />
      </button>
    </NavBar>
  );
}
