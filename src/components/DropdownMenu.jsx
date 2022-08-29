import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import DropdownCheckbox from "./Checkbox";

function DropdownMenu({
  dropdownItems = [],
  selectedDropdownItems = [],
  setSelectedDropdownItems,
  dropdownButton = null,
  direction = "down",
  multiSelect = false,
  uniqueIdentifier = "",
  setIsDropdownShowing,
}) {
  const [menuWidth, setMenuWidth] = useState("15rem");

  useEffect(() => {
    if (dropdownButton) {
      setMenuWidth(dropdownButton.current.clientWidth + "px");
    }
  }, [dropdownButton, setMenuWidth]);

  function handleMenuButtonClick(currentItem) {
    if (multiSelect) {
      const copyOfSelectedItems = [...selectedDropdownItems];
      const selectedItemIndex = copyOfSelectedItems.findIndex(
        (item) => item.id === currentItem.id
      );

      // The item is not selected, so select it
      if (selectedItemIndex === -1) {
        copyOfSelectedItems.push(currentItem);
        setSelectedDropdownItems(copyOfSelectedItems);
      }
      // The item is already selected, so unselect it
      else {
        copyOfSelectedItems.splice(selectedItemIndex, 1);
        setSelectedDropdownItems(copyOfSelectedItems);
      }

      const currentElement = document.getElementById(
        `dropdown-button-${uniqueIdentifier}-${currentItem.id}`
      );
    } else {
      setSelectedDropdownItems([currentItem]);
      setIsDropdownShowing(false);
    }

    if (dropdownButton) dropdownButton.current.focus();
  }

  function handleMenuKeyDown(keyCode = "", currentIndex = 0) {
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
    } else if (keyCode === "Escape") {
      setIsDropdownShowing(false);
      if (dropdownButton) dropdownButton.current.focus();
    }
  }

  const menuItems = dropdownItems.map((item) => {
    return (
      <MenuItem
        onKeyDown={(e) => handleMenuKeyDown(e.key, item.id)}
        key={`dropdown-item-${uniqueIdentifier}-${item.id}`}
      >
        <MenuButton
          id={`dropdown-button-${uniqueIdentifier}-${item.id}`}
          onClick={() => handleMenuButtonClick(item)}
        >
          {multiSelect && (
            <DropdownCheckbox
              isChecked={
                selectedDropdownItems.findIndex(
                  (selectedItem) => selectedItem.id === item.id
                ) !== -1
              }
            />
          )}
          {item.text}
        </MenuButton>
      </MenuItem>
    );
  });

  return <Menu width={menuWidth}>{menuItems}</Menu>;
}

const menuFadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
const Menu = styled.ul`
  width: ${(props) => props.width};
  background-color: #eeeeee;
  position: absolute;
  list-style-type: none;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  transform: translateY(0.15rem);
  box-shadow: 10px 10px 88px -37px rgba(0, 0, 0, 0.48);
  animation: ${menuFadeIn} 150ms ease-in-out;
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
  display: flex;
  align-items: center;
  :focus-within {
    outline: 3.5px solid #53a8d295;
    z-index: 2;
  }

  :hover {
    background-color: #e3e3e3;
    transition: background-color 100ms ease-in-out;
  }
`;

export default DropdownMenu;
