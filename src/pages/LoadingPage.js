import styled from "styled-components";
import Wave from "react-wavify";
import { useNavigate } from "react-router-dom";

const Loading = styled.div`
  height: 100%;
  width: 100%;
  top: 10%;

  h1 {
    font-size: 50px;
  }

  .waves {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 50%;
  }
`;

export default function LoadingPage() {
  return (
    <Loading>
      <h1>STUDENT ATTENDANCE MANAGEMENT SYSTEM</h1>

      <div className="loading-icon">
        Loading...
        <img></img>
      </div>
      <div className="waves">
        <Wave
          fill="url(#gradient)"
          options={{
            height: 20,
            amplitude: 60,
            speed: 0.1,
            points: 7,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="var(--clr-light-grey)" />

              <stop offset="90%" stopColor="var(--clr-text-green)" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </Loading>
  );
}
