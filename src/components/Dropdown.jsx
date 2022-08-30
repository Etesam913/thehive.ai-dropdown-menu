import { useEffect, useRef, useState, memo } from "react";
import styled from "styled-components";
import useOnClickOutside from "../hooks/useOnClickOutside";
import DropdownMenu from "./DropdownMenu";

function Dropdown({
  direction = "down",
  items = [
    "🦖 This is a T-Rex!",
    "🐶 This is a dog!",
    "🐱 This is a cat!",
    "🍅 This is a tomato",
  ],
  multiSelect = false,
  placeholderText = "✨ This is some placeholder text",
  width = "18rem",
  selectedDropdownItems = [],
  setSelectedDropdownItems = null,
  labelText = "This is a Dropdown Menu!",
}) {
  const dropdownItems = items.map((itemText, index) => ({
    id: index,
    text: itemText,
  }));

  const [isDropdownShowing, setIsDropdownShowing] = useState(false);
  const uniqueIdentifier = uuidv4();
  const dropdownWrapper = useRef(null);
  const dropdownButton = useRef(null);

  useOnClickOutside(dropdownWrapper, () => setIsDropdownShowing(false));

  useEffect(() => {
    if (isDropdownShowing) focusOnFirstDropdownItem(uniqueIdentifier);
  }, [isDropdownShowing]);

  return (
    <div ref={dropdownWrapper}>
      <DropdownLabel htmlFor={`dropdown-${uniqueIdentifier}`}>
        {labelText}
      </DropdownLabel>
      <DropdownButton
        id={`dropdown-${uniqueIdentifier}`}
        onClick={() => setIsDropdownShowing(!isDropdownShowing)}
        data-bs-toggle="dropdown"
        ref={dropdownButton}
        width={width}
        onKeyDown={(e) =>
          e.key === "ArrowDown" && focusOnFirstDropdownItem(uniqueIdentifier)
        }
      >
        {selectedDropdownItems.length === 0
          ? placeholderText
          : selectedDropdownItems.map((item) => item.text).join(", ")}
        <DownCaret isDropdownShowing={isDropdownShowing} />
      </DropdownButton>
      {isDropdownShowing && (
        <DropdownMenu
          dropdownItems={dropdownItems}
          selectedDropdownItems={selectedDropdownItems}
          setSelectedDropdownItems={setSelectedDropdownItems}
          direction={direction}
          uniqueIdentifier={uniqueIdentifier}
          dropdownButton={dropdownButton}
          setIsDropdownShowing={setIsDropdownShowing}
          multiSelect={multiSelect}
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
  justify-content: space-between;
  width: ${(props) => props.width};
  :focus-within {
    outline: 3.5px solid #53a8d295;
  }
`;
const DropdownLabel = styled.label`
  font-size: 1.15rem;
  display: block;
  padding: 0.3rem 0;
  cursor: pointer;
`;

const DownCaret = ({ isDropdownShowing }) => {
  return (
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
  );
};

const DownCaretSvg = styled.svg`
  margin-left: 0.35rem;
  transform: rotateZ(
    ${(props) => (props.isDropdownShowing ? "180deg" : "0deg")}
  );
  transition: transform 200ms ease-in-out;
`;

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function focusOnFirstDropdownItem(uniqueIdentifier) {
  const firstDropdownElement = document.getElementById(
    `dropdown-button-${uniqueIdentifier}-0`
  );
  if (firstDropdownElement) firstDropdownElement.focus();
}

export default memo(Dropdown);
