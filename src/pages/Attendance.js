import styled from "styled-components";
import SideFixture from "../page-frame/SideFixture";
import { useState } from "react";
import Modal from "../components/Modal";
import { GetDocuments } from "../firebase/config";
import { useEffect } from "react";

const AttendanceTable = styled.div`
  background-color: #f3f2e7;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: absolute;
  top: 0;
  right: 0;
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
  height: 30px;
  padding: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  button {
    border: 3px solid rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    margin: 0 5px;
    color: var(--clr-darkest-grey);
    font-size: 14px;

    &:hover {
      border-bottom: 3px solid var(--clr-green);
      transform: none;
    }
  }
`;

const TableContainer = styled.div`
  border-radius: 25px;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: white;
`;
const Table = styled.table`
  margin: 15px 0;
  padding: 5px 12px;
  width: 100%;
  border: none;
  border-collapse: collapse;

  th {
    height: 40px;
    border-top: 2px solid var(--clr-darker-grey);
    border-bottom: 2px solid var(--clr-darker-grey);
  }
  tr {
    height: 35px;
    margin: 20px 0;
    padding: 15px 0;
  }

  tr:nth-child(even) {
    background-color: var(--clr-light-grey);
  }

  tr:last-child {
    border-bottom: 2px solid var(--clr-darker-grey);
  }
`;

const ManualButton = styled.button`
  background-color: white;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 25px;
  font-size: 14px;
  width: 18%;
  margin: 10px 20px;
  height: 2.8em;
  /* font-weight: 500; */
  color: var(--clr-text-green);

  &:hover {
    transform: scale(1.01);
    color: var(--clr-white);
    background-color: var(--clr-text-green);
  }
`;

export default function Attendance() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    let Documents = GetDocuments();
    console.log("documents", Documents);
  }, []);

  function GetTableData() {
    // Documents = GetDocuments();
  }

  return (
    <div
      style={{
        display: "grid",
        width: "100vw",
        height: "100vh",
        gridTemplateColumns: "1fr 5fr",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "0",
      }}
    >
      <SideFixture />
      <AttendanceTable>
        {showForm ? <Modal modalControl={setShowForm} /> : null}
        <Container>
          <h2>Attendance Table</h2>
          <div
            style={{
              display: "flex",
              flex: "row no-wrap",
              alignItems: "top",
            }}
          >
            {" "}
            <Label>
              Sort by:
              <button>100lvl</button>
              <button>200lvl</button>
              <button>300lvl</button>
              <button>400lvl</button>
              <button>500lvl</button>
            </Label>
            <ManualButton
              onClick={() => {
                setShowForm(!showForm);
              }}
            >
              Add attendance manually{" "}
            </ManualButton>
            <button onClick={GetTableData()}>Get Documents</button>
          </div>
          <TableContainer>
            <h2>Attendance Table</h2>
            <Table>
              <th>
                <td>SN</td>
                <td>Name</td>
                <td>Matric Number</td>
                <td>Course</td>
                <td>Time</td>
                <td>Date</td>
              </th>
              {/* <tbody>
              {Documents === []
                ? console.log("no table data")
                : // : (Documents.forEach((data, index) => {
                  //     return (
                  //       <tr key={index}>
                  //         <td>{index + 1}</td>
                  //         <td>{data.name}</td>
                  //         <td>{data.matricNumber}</td>
                  //         <td>{data.course}</td>
                  //         <td>{data.addAt}</td>
                  //       </tr>
                  //     );
                  //   }))
                  null}
            </tbody> */}
            </Table>
          </TableContainer>
        </Container>
      </AttendanceTable>
    </div>
  );
}
