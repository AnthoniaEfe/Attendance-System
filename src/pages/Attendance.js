import styled from "styled-components";
import SideFixture from "../page-frame/SideFixture";
import { useState } from "react";
//all firestore import in single file
import {
  colRef,
  addDoc,
  deleteDoc,
  doc,
  db,
  serverTimestamp,
} from "../firebase/config";

const AttendanceTable = styled.div`
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
  /* box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.3); */
  margin-top: 30px;
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

export default function Attendance() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [matricNumber, setMatricNumber] = useState("");
  const [id, setId] = useState("");

  function handleAdd(e) {
    e.preventDefault();

    addDoc(colRef, {
      name: name,
      matricnumber: matricNumber,
      course: course,
      addAt: serverTimestamp()
    }).then(() => {
      setName("");
      setCourse("MCT 501");
      setMatricNumber("");
    });
  }

  function handleDelete(e) {
    e.preventDefault();

    const docRef = doc(db, "cards", id);
    deleteDoc(docRef).then(() => {
      setId("");
    });
  }

  return (
    <AttendanceTable>
      <SideFixture />
      <Container>
        <h2>Attendance Table</h2>

        <Label>
          <button>100lvl</button>
          <button>200lvl</button>
          <button>300lvl</button>
          <button>400lvl</button>
          <button>500lvl</button>
        </Label>
        <form className="add" onSubmit={handleAdd}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            value={name}
          />
          <input
            type="text"
            onChange={(e) => setMatricNumber(e.target.value)}
            placeholder="Matric number"
            value={matricNumber}
          />
          <label>
            course
            <select onChange={(e) => setCourse(e.target.value)}>
              <option value="MCT501">MCT 501</option>
              <option value="MCT 509">MCT 509</option>
              <option value="EEE 527">EEE 527</option>
            </select>
          </label>
          <button>add </button>
        </form>

        <form className="delete" onSubmit={handleDelete}>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            placeholder="ID"
            value={id}
          />
          <button>Delete</button>
        </form>

        <TableContainer>
          <h3>contents</h3>
          <Table>
            <tbody>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Matric No.</th>
                <th>ID No.</th>
                <th>Course</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Sarah elizabeth Segun</td>
                <td>24/ENG01/022</td>
                <td>2455892992</td>
                <td>EEE323</td>
                <td>13:02</td>
                <td>10/01/22</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sarah Segun</td>
                <td>24/ENG01/022</td>
                <td>2455892992</td>
                <td>EEE323</td>
                <td>13:02</td>
                <td>10/01/22</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sarah Segun</td>
                <td>24/ENG01/022</td>
                <td>2455892992</td>
                <td>EEE323</td>
                <td>13:02</td>
                <td>10/01/22</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Sarah Segun</td>
                <td>24/ENG01/022</td>
                <td>2455892992</td>
                <td>EEE323</td>
                <td>13:02</td>
                <td>10/01/22</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </Container>
    </AttendanceTable>
  );
}
