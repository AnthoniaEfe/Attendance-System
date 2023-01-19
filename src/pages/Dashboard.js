import styled from "styled-components";
import { Doughnut, Bar } from "react-chartjs-2";
import SideFixture from "../page-frame/SideFixture";
import file from "../assets/ready.png";

// const data = {
//   labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [11, 16, 7, 3, 14],
//       backgroundColor: [
//         "rgb(255, 99, 132)",
//         "rgb(75, 192, 192)",
//         "rgb(255, 205, 86)",
//         "rgb(201, 203, 207)",
//         "rgb(54, 162, 235)",
//       ],
//     },
//   ],
// };
const DashboardPage = styled.div`
  background-color: var(--clr-light-grey);
  display: flex;
  overflow: auto;
  width: 100vw;
  height: 100vh;
`;

const DashboardContents = styled.div`
  padding: 30px;
  flex-grow: 20;
  margin: 0;
  margin-left: 15%;
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
    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.3);
  }

  .item6 {
    display: flex;
    flex-direction: column;
    grid-area: 2 /2 / span 2 / span 2;
    padding: 10px;
    text-align: center;
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
    <DashboardPage>
      <SideFixture />

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
            <div>
              {" "}
              {/* <Doughnut data={[25, 28, 50, 76]}
              /> */}
            </div>
          </div>{" "}
        </GridContainer>
      </DashboardContents>
    </DashboardPage>
  );
}
