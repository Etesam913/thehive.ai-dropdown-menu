import { useState } from "react";
import styled from "styled-components";
import Dropdown from "./components/Dropdown";
function App() {
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);
  return (
    <AppContainer>
      <Dropdown />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default App;
