import styled from "styled-components";
import SideFixture from "../page-frame/SideFixture";

const Contents = styled.div`
  background-color: var(--clr-light-grey);
  display: flex;
  overflow: auto;
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
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
    <Contents>
      <SideFixture />

      <Container>
        <h2>Attendance Report</h2>
        <Label>
          Adipisicing pariatur ex id exercitation non ut quis exercitation.
        </Label>
      </Container>
    </Contents>
  );
}
