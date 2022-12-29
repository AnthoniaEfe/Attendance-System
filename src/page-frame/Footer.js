import styled from "styled-components";

const FooterContents = styled.div`
  background-color: var(--clr-green);
  color: var(--clr-white);
  padding: 2rem 0;
  margin-top: 0.5rem;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContents>
      <div className="container">
        <a href="mailto:helpdesk@nnpcgroup.com">Contact Helpdesk</a>
        <p>&copy; {new Date().getFullYear()} NNPC Ltd.</p>
      </div>
    </FooterContents>
  );
}
