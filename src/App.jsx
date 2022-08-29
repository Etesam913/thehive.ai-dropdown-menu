import { useState } from "react";
import styled from "styled-components";
import Dropdown from "./components/Dropdown";
function App() {
  const [selectedDropdownItems1, setSelectedDropdownItems1] = useState([]);
  const [selectedDropdownItems2, setSelectedDropdownItems2] = useState([]);
  return (
    <AppContainer>
      <span style={{ margin: "0 0.5rem" }}>
        <Dropdown
          selectedDropdownItems={selectedDropdownItems1}
          setSelectedDropdownItems={setSelectedDropdownItems1}
          labelText="Regular Dropdown Menu"
        />
      </span>
      <span style={{ margin: "0 0.5rem" }}>
        <Dropdown
          selectedDropdownItems={selectedDropdownItems2}
          setSelectedDropdownItems={setSelectedDropdownItems2}
          multiSelect
          labelText="Dropdown Menu With Multi-Select"
        />
      </span>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 10rem;
`;

export default App;
