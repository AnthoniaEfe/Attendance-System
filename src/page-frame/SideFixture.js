import Sidebar from "./Sidebar";
import Navigation from "./Navigation";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.4fr 2.0fr;
  grid-template-rows: 100vh;
`;
export default function SideFixture() {
  return (
    <Container>
      <Navigation />
      <Sidebar />
    </Container>
  );
}
