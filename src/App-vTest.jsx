import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyeledApp = styled.main`
  height: 100dvh;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyeledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in Button</Heading>
              <Button onClick={() => alert("Check In")}>Check IN</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Check Out")}
              >
                Check OUT
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input placeholder="Number of Person" type="Number" />
              <Input placeholder="Number of Person" type="Number" />
            </form>
          </Row>
        </Row>
      </StyeledApp>
      ;
    </>
  );
}

export default App;
