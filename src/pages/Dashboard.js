import styled from "styled-components";
import Sidebar from "../page-frame/Sidebar";
import Navigation from "../page-frame/Navigation";
import file from "../assets/ready.png";
import Donut from "./Donut";

const DashboardPage = styled.div`
  background-color: var(--clr-bg-grey);
  display: flex;
  width: auto;
  height: 100vh;
  overflow: auto;
`;

const DashboardContents = styled.div`
  width: 100%;
  padding: 2em;
  h2 {
    text-align: left;
    color: var(--clr-text-green);
    font-weight: 700;
    font-size: 32px;
  }
`;

const Label = styled.div`
  width: 30%;
  background-color: white;
  border-radius: 25px;
  margin: 10px 0;
  padding: 5px;

  p {
    padding: 5px;
    text-align: left;
    font-size: var(--medium-font);
  }
`;

const GridContainer = styled.div`
  /* background-color: blue; */
  height: 85%;
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr repeat(2, 0.8fr);
  grid-template-rows: 0.3fr repeat(2, 0.3fr);
  gap: 30px 45px;
  align-items: space-evenly;
  justify-content: center;

  .grid-item {
    padding: 10px;
    background-color: white;
    border-radius: 25px;
    display: grid;
    grid-template-columns: 28% 72%;
    grid-template-rows: 50% 50%;
    /* box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.3); */
  }

  .item6 {
    display: flex;
    flex-direction: column;
    grid-area: 2 /2 / span 2 / span 2;
    padding: 15px;
    text-align: center;
    p {
      align-self: center;
      font-weight: 700;
    }
    #chart {
      align-self: center;
      justify-self: center;
      background-color: green;
      margin: 10px 10px;
    }
  }

  .fileimg {
    margin: 10px 0px 10px 15px;
    margin-right: none;
    padding: 5px;
    grid-area: 1/1 / span 2 / span 1;
    width: 50%;
    height: 60%;
    color: white;
  }

  p {
    text-align: left;
    font-size: 18px;
  }

  .big-text {
    color: var(--clr-darkest-grey);
    font-size: 44px;
    font-weight: 800;
  }
`;

export default function Dashboard() {
  return (
    <div
      style={{
        display: "grid",
        width: "100vw",
        height: "100vh",
        gridTemplateColumns: "0.5fr 2.6fr 15fr",
        justifyContent: "space-evenly",
        // alignItems: "center",
        gap: "0",
      }}
    >
      {" "}
      <Navigation />
      <Sidebar />
      <DashboardPage>
        <DashboardContents>
          <h2>Dashboard</h2>
          <Label>
            <p>
              Good Afternoon, <b>Engr. Prof. Oluwaseun</b>
            </p>
          </Label>

          <GridContainer>
            <div className="grid-item item1">
              <img src={file} alt="" className="fileimg" />
              <p className="big-text">82</p>
              <p>Total Students</p>
            </div>
            <div className="grid-item item2">
              <img src={file} alt="" className="fileimg" />
              <p className="big-text">40</p> <p>Male Students</p>
            </div>{" "}
            <div className="grid-item item3">
              <img src={file} alt="" className="fileimg" />
              <p className="big-text">42</p> <p>Female Students</p>
            </div>{" "}
            <div className="grid-item item4">
              <img src={file} alt="" className="fileimg" />
              <p className="big-text">9</p> <p>Number of Courses</p>
            </div>{" "}
            <div className="grid-item item5">
              <img src={file} alt="" className="fileimg" />
              <p className="big-text">3</p> <p>Number of Levels </p>
            </div>{" "}
            <div className="grid-item item6">
              <p> Monthly Attendance Review</p>
              <div id="chart"></div>
              <Donut />
            </div>{" "}
          </GridContainer>
        </DashboardContents>
      </DashboardPage>
    </div>
  );
}
