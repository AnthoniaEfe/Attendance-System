import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { BsColumnsGap, BsTable, BsFileEarmarkText } from "react-icons/bs";
// import abuad from "../assets/abuad.jpeg";
import abuad from "../assets/abuadbg.png";

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  padding: 10% 0;
  background-color: var(--clr-white);

  img {
    background-color: var(--clr-white);
    margin: 20px 0;
    width: 50px;
  }
`;

const SideBarButtons = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  margin: 0 auto 0 0;

  .side-buttons {
    margin: 7px 0;

    padding: 6px 3px;
    display: flex;
    justify-content: left;
    align-items: center;
    border-radius: 0 5px 5px 0;
    border: 1px solid rgba(0, 0, 0, 0);

    &:hover {
      /* transform: scale(1.02); */
      cursor: pointer;
      background-color: var(--clr-dark-grey);
    }

    a {
      color: var(--clr-dark-green);
      margin: 0 5px 0 0;

      /* &:active {
        background-color: var(--clr-light-grey);
      } */
    }
  }
`;

const iconStyles = {
  fontSize: "16px",
  color: "var(--clr-dark-green)",
  margin: "0 8px",
};
export default function sidebar() {
  return (
    <SideBar>
      <img src={abuad} alt="logo" />
      <SideBarButtons>
        <div className="side-buttons">
          <BsColumnsGap style={iconStyles} />
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>

        <div className="side-buttons">
          <BsTable style={iconStyles} />
          <NavLink to="/attendance">Attendance</NavLink>
        </div>

        <div className="side-buttons">
          <BsFileEarmarkText style={iconStyles} />
          <NavLink to="/report">Attendance Report</NavLink>
        </div>
      </SideBarButtons>
    </SideBar>
  );
}
