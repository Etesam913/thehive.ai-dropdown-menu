import { useState } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";

function Dropdown({
  direction = "down",
  items = ["🦖 This is a T-Rex!", "🐶 This is a dog"],
  multiSelect = false,
  placeholderText = "✨ This is some placeholder text",
}) {
  const [dropdownItems, setDropdownItems] = useState(
    items.map((itemText, index) => ({ id: index, text: itemText }))
  );
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);
  const [selectedDropdownItems, setSelectedDropdownItems] = useState([]);
  const dropdownWidth = "17rem";

  return (
    <div>
      <DropdownButton
        onClick={() => setIsDropdownShowing(!isDropdownShowing)}
        data-bs-toggle="dropdown"
        width={dropdownWidth}
      >
        {selectedDropdownItems.length === 0
          ? placeholderText
          : setDropdownItems.join(", ")}
        <DownCaret isDropdownShowing={isDropdownShowing} />
      </DropdownButton>
      {isDropdownShowing && (
        <DropdownMenu
          dropdownItems={dropdownItems}
          selectedDropdownItems={selectedDropdownItems}
          setSelectedDropdownItems={setSelectedDropdownItems}
          dropdownWidth={dropdownWidth}
          direction={direction}
        />
      )}
    </div>
  );
}

const DropdownButton = styled.button`
  background-color: #eeeeee;
  border: 0;
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
`;

const DownCaret = ({ isDropdownShowing }) => {
  return (
    <span>
      <DownCaretSvg
        height="16"
        width="16"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        isDropdownShowing={isDropdownShowing}
      >
        <path d="M98,190.06,237.78,353.18a24,24,0,0,0,36.44,0L414,190.06c13.34-15.57,2.28-39.62-18.22-39.62H116.18C95.68,150.44,84.62,174.49,98,190.06Z" />
      </DownCaretSvg>
    </span>
  );
};

const DownCaretSvg = styled.svg`
  margin-left: 0.35rem;
  transform: rotateZ(
    ${(props) => (props.isDropdownShowing ? "180deg" : "0deg")}
  );
`;

export default Dropdown;
