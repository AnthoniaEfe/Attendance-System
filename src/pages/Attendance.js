import styled from "styled-components";
import Sidebar from "../page-frame/Sidebar";
import Navigation from "../page-frame/Navigation";
import { useState } from "react";
import Modal from "../components/Modal";
import { GetDocuments, serverTimestamp, db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";

const AttendanceTable = styled.div`
  background-color: var(--clr-bg-grey);
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

const Lable = styled.div`
  width: 35%;
  /* background-color: white; */
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
    /* margin: 0 5px; */
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
  const [showData, setShowData] = useState(false);
  const [documents, setDocuments] = useState();

  useEffect(() => {
    getCards();
    console.log("cards data is:", getCards());
    setDocuments(getCards());
    // console.log(documents);
  }, []);

  async function getCards() {
    let cards = [];
    onSnapshot(collection(db, "cards"), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        cards.push({ ...doc.data(), id: doc.id });
      });
    });
    setDocuments(cards);
    return cards;
  }

  useEffect(() => {
    const fetchData = async () => {
      db.on("value", (snapshot) => {
        const firebaseData = snapshot.val();
        const dataArray = Object.values(firebaseData);
        setDocuments(dataArray);
      });
    };
    fetchData();
  }, []);

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
      <Navigation />
      <Sidebar />
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
            {/* {" "}
            <Lable>
              <button>100lvl</button>
              <button>200lvl</button>
              <button>300lvl</button>
              <button>400lvl</button>
              <button>500lvl</button>
            </Lable> */}
            <ManualButton
              onClick={() => {
                setShowForm(!showForm);
              }}
            >
              Add attendance manually{" "}
            </ManualButton>
          </div>
          <TableContainer>
            <div>
              {documents.map((item) => (
                <p key={item.id}>{item.title}</p>
              ))}
            </div>

            <Table>
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Name</th>
                  <th>Matric Number</th>
                  <th>Course</th>
                  <th>Time</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Maria Andrews</td>
                  <td>17/ENG04/035</td>
                  <td>EEE527</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Sandra Okeke</td>
                  <td>18/ENG05/046</td>
                  <td>MCT509</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Anthonia Efe</td>
                  <td>18/ENG05/049</td>
                  <td>MCT509</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </Table>
            {/* <Table>
              <th>SN</th>
              <th>Name</th>
              <th>Matric Number</th>
              <th>Course</th>
              <th>Time</th>
              <th>Date</th>

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
            </tbody> *
            </Table> */}
            {showData ? (
              <ul>
                {!documents
                  ? null
                  : documents.map((document, index) => (
                      <li numbering={index + 1} document={document}>
                        <p>amen</p>
                        <p>document</p>
                      </li>
                    ))}
              </ul>
            ) : null}
          </TableContainer>
        </Container>
      </AttendanceTable>
    </div>
  );
}
