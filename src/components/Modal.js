import styled from "styled-components";
import { useState } from "react";
import {
  colRef,
  addDoc,
  deleteDoc,
  doc,
  db,
  serverTimestamp,
  GetDocuments,
  GetDocument,
} from "../firebase/config";

const Container = styled.div`
  height: 100%;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Card = styled.div`
  padding: 15px;
  margin: 20vh auto;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  width: 40%;
  height: auto;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.3);
`;

const ManualForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-self: center;
  margin: 5px 10px;
  /* width: 5%; */

  label {
    /* display: inline-block; */
    margin: 3px 5px;
    align-self: left;
    text-align: left;
    color: var(--clr-text-green);
  }

  input {
    height: 18px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 1);
    margin: 8px;
    padding: 5px;
  }
  select {
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 1);
    margin: 10px;
    padding: 5px;
  }

  button {
    height: 30px;
    width: 30%;
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 1);
    margin: 10px auto 5px;
    padding: 5px;
    text-align: center;

    &:hover {
      transform: scale(1.01);
      color: var(--clr-white);
      background-color: var(--clr-text-green);
      border: 1px solid rgba(0, 0, 0, 0);
    }
  }

  #cancel-btn:hover {
    transform: scale(1.01);
    color: var(--clr-white);
    background-color: var(--clr-dark-red);
    border: 1px solid rgba(0, 0, 0, 0);
  }
`;

export default function Modal(props) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [matricNumber, setMatricNumber] = useState("MCT 509");
  const [id, setId] = useState("");
  let Documents = [];

  function handleAdd(e) {
    e.preventDefault();

    if (name !== "" && course !== "" && matricNumber !== "") {
      addDoc(colRef, {
        name: name,
        matricnumber: matricNumber,
        course: course,
        addAt: serverTimestamp(),
      }).then(() => {
        setName("");
        setCourse("MCT 501");
        setMatricNumber("");
      });

      Documents = GetDocuments();
      // console.log(Documents);

      //get snapshot and push new object to the array

      closeModal();
    } else {
      alert("Please input values to form");
    }
  }

  function handleDelete(e) {
    e.preventDefault();

    // const docRef = doc(db, "cards", "L1y5Q6bU75M4teCCfN5M");
    // deleteDoc(docRef).then(() => {
    //   setId("");
    // });
    console.log("just deleted")
  }

  function closeModal() {
    props.modalControl(false);
  }

  return (
    <Container>
      {" "}
      <Card>
        <ManualForm>
          <h2>Add attendance manually</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name}
            required
          />
          <label htmlFor="matno">Matriculation Number</label>
          <input
            type="text"
            onChange={(e) => setMatricNumber(e.target.value)}
            name="matno"
            value={matricNumber}
            required
          />
          <label htmlFor="course">Course</label>
          <select onChange={(e) => setCourse(e.target.value)} name="course">
            <option value="MCT501">MCT 501</option>
            <option value="MCT 509">MCT 509</option>
            <option value="EEE 527">EEE 527</option>
          </select>
          <div style={{ display: "flex" }}>
            <button onClick={handleAdd}>Add </button>
            <button id="cancel-btn" onClick={() => props.modalControl(false)}>
              Cancel
            </button>
          </div>

          {/* <input
    type="text"
    onChange={(e) => setId(e.target.value)}
    placeholder="ID"
    value={id}
  />
  <button onClick={handleDelete}>Delete</button> */}
        </ManualForm>
      </Card>
    </Container>
  );
}
