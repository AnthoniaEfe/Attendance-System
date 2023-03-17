import styled from "styled-components";
import Sidebar from "../page-frame/Sidebar";
import Navigation from "../page-frame/Navigation";
const Contents = styled.div`
  background-color: #f3f2e7;
  display: flex;
  width: auto;
  height: 100vh;
  overflow: auto;
`;
const Container = styled.div`
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
  width: 35%;
  background-color: white;
  border-radius: 25px;
  margin: 10px 0;
  padding: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export default function AttendanceReport() {
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
    ><Navigation />
        <Sidebar />
      <Contents>
        

        <Container>
          <h2>Attendance Report</h2>
          <Label>
            Adipisicing pariatur ex id exercitation non ut quis exercitation.
          </Label>
        </Container>
      </Contents>
    </div>
  );
}
