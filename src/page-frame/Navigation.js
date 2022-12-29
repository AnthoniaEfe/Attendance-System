import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaArrowLeft,
  FaScrewdriver,
  FaBell,
  FaArrowAltCircleLeft,
} from "react-icons/fa";

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
    margin-top: 10px;
    justify-content: space-between;
    padding: 5px;
    width: 100%;
    height: 30%;
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
    }
  }
`;

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <NavBar>
      <div>
        <button onClick={navigate(-1)}>
          <FaArrowLeft />
        </button>

        <button onClick={navigate(-1)}>
          <FaUser />
        </button>

        <button onClick={navigate(-1)}>
          <FaBell />
        </button>

        <button onClick={navigate(-1)}>
          <FaScrewdriver />
        </button>
      </div>
      <button onClick={navigate(-1)} id="logout">
        <FaArrowAltCircleLeft />
      </button>
    </NavBar>
  );
}
