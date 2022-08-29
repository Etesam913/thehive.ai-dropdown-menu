import styled from "styled-components";
import { useEffect, useState } from "react";

function DropdownMenu({
  dropdownItems = [],
  selectedDropdownItems = [],
  setSelectedDropdownItems,
  dropdownButton = null,
  direction = "down",
  multiSelect = false,
  uniqueIdentifier = "",
}) {
  const [menuWidth, setMenuWidth] = useState("15rem");

  useEffect(() => {
    if (dropdownButton) {
      setMenuWidth(dropdownButton.current.clientWidth + "px");
    }
  }, [dropdownButton, setMenuWidth]);

  const menuItems = dropdownItems.map((obj) => {
    return (
      <MenuItem
        onKeyDown={(e) => handleMenuKeyDown(e.key, obj.id, uniqueIdentifier)}
        key={`dropdown-item-${uniqueIdentifier}-${obj.id}`}
      >
        <MenuButton id={`dropdown-button-${uniqueIdentifier}-${obj.id}`}>
          {obj.text}
        </MenuButton>
      </MenuItem>
    );
  });

  return <Menu width={menuWidth}>{menuItems}</Menu>;
}

const Menu = styled.ul`
  width: ${(props) => props.width};
  background-color: #eeeeee;
  position: absolute;
  list-style-type: none;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  transform: translateY(0.15rem);
  box-shadow: 10px 10px 88px -37px rgba(0, 0, 0, 0.48);
`;

const MenuItem = styled.li``;

const MenuButton = styled.button`
  border: 0;
  background: transparent;
  padding: 0.5rem 0.65rem;
  border-radius: 0.5rem;
  width: 100%;
  text-align: left;
  transition: background-color 100ms ease-in-out;
  position: relative;
  :focus-within {
    outline: 3.5px solid #53a8d295;
    z-index: 2;
  }

  :hover {
    background-color: #e3e3e3;
    transition: background-color 100ms ease-in-out;
  }
`;

function handleMenuKeyDown(
  keyCode = "",
  currentIndex = 0,
  uniqueIdentifier = ""
) {
  if (keyCode === "ArrowUp") {
    const previousElement = document.getElementById(
      `dropdown-button-${uniqueIdentifier}-${currentIndex - 1}`
    );
    if (previousElement) previousElement.focus();
  } else if (keyCode === "ArrowDown") {
    const nextElement = document.getElementById(
      `dropdown-button-${uniqueIdentifier}-${currentIndex + 1}`
    );
    if (nextElement) nextElement.focus();
  }
}

export default DropdownMenu;
