import styled from "styled-components";
import { Link } from "react-router-dom";

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  padding: 8px;
  background-color: var(--clr-white);

  #logo {
    width: 140px;
    height: 70px;
    background-color: var(--clr-white);
    padding: 10px;
  }
`;

const SideBarButtons = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin: 5px 10px;
    font-size: 16px;
    height: auto;
    border: none;
    background-color: var(--clr-white);
    text-align: center;
    padding: 10px 5px;
    border-radius: 3px;
    color: var(--clr-dark-green);

    &:hover {
      background-color: var(--clr-grey);
    }
  }
`;
export default function sidebar() {
  return (
    <SideBar>
      <img src="./assets/Logo.svg" alt="logo" />
      <SideBarButtons>
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/attendance">Attendance</Link>

        <Link to="/report">Attendance Report</Link>
      </SideBarButtons>
    </SideBar>
  );
}