import { useState } from "react";
import styled from "styled-components";
import Dropdown from "./components/Dropdown";
function App() {
  const [selectedDropdownItems1, setSelectedDropdownItems1] = useState([]);
  const [selectedDropdownItems2, setSelectedDropdownItems2] = useState([]);
  return (
    <AppContainer>
      <div style={{ margin: "0 0.5rem" }}>
        <Dropdown
          selectedDropdownItems={selectedDropdownItems1}
          setSelectedDropdownItems={setSelectedDropdownItems1}
          labelText="Regular Dropdown Menu"
          placeholderText="This is placeholder text"
          items={[
            "🦖 This is a T-Rex!",
            "🐶 This is a dog!",
            "🐱 This is a cat!",
            "🍅 This is a tomato!",
          ]}
        />
      </div>
      <div style={{ margin: "0 0.5rem" }}>
        <Dropdown
          selectedDropdownItems={selectedDropdownItems2}
          setSelectedDropdownItems={setSelectedDropdownItems2}
          multiSelect
          labelText="Dropdown Menu With Multi-Select"
          items={[
            "🦖 This is a T-Rex!",
            "🐶 This is a dog!",
            "🐱 This is a cat!",
            "🍅 This is a tomato!",
            "🫐 This is a blueberry!",
            "🍌 This is a banana!",
            "🍊 This is an orange!",
            "🍎 This is an apple!",
            "🥑 This is an avocado!",
          ]}
        />
      </div>
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
  align-items: center;
`;

export default App;
