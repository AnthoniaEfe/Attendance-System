import styled from "styled-components";
import { Doughnut, Bar } from "react-chartjs-2";
import SideFixture from "../page-frame/SideFixture";

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
    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.3);
  }

  .item6 {
    grid-area: 2 /2 / span 2 / span 2;
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
            Good Afternoon, Engr. Prof. <b>Oluwaseun</b>
          </p>
        </Label>

        <GridContainer>
          <div className="grid-item item1">
            <img src="../assets/Logo.png" alt="" />
            <p>Total Students</p>
            <h2>82</h2>
          </div>
          <div className="grid-item item2">
            <img src="../assets/Logo.png" alt="" />
            <p>Male Students</p>
            <h2>40</h2>
          </div>{" "}
          <div className="grid-item item3">
            <img src="../assets/Logo.png" alt="" />
            <p>Female Students</p>
            <h2>42</h2>
          </div>{" "}
          <div className="grid-item item4">
            <img src="../assets/Logo.png" alt="" />
            <p>Number of Courses</p>
            <h2>9</h2>
          </div>{" "}
          <div className="grid-item item5">
            <img src="../assets/Logo.png" alt="" />
            <p>Number of Levels </p>
            <h2>3</h2>
          </div>{" "}
          <div className="grid-item item6">
            <img src="../assets/Logo.png" alt="" />
            Monthly Attendance Review
            <div>
              {" "}
              {/* <Doughnut data={[25, 28, 50, 76]}
              /> */}
            </div>
          </div>{" "}
        </GridContainer>
      </DashboardContents>

      {/* <Footer /> */}
    </DashboardPage>
  );
}
