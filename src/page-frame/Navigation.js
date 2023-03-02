import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
  const { currentUser, logout } = useAuth();

  async function handleLogOut() {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch {
      setError("unable to log out");
    }
  }

  return (
    <NavBar>
      <div>
        <button onClick={navigate(-1)}>
          <AiOutlineArrowLeft style={iconStyles} />
        </button>

        <button onClick={navigate(-1)}>
          <AiOutlineUser style={iconStyles} />
        </button>

        <button onClick={navigate(-1)}>
          <AiOutlineBell style={iconStyles} />
        </button>

        <button onClick={navigate(-1)}>
          <AiOutlineSetting style={iconStyles} />
          {/* add update email and password dropdowns here */}
        </button>
      </div>
      <button onClick={handleLogOut} id="logout">
        <AiOutlineLogout />
      </button>
    </NavBar>
  );
}
