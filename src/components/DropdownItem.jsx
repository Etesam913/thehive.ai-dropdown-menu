import styled from "styled-components";
import DropdownCheckbox from "./Checkbox";

function DropdownItem({
  uniqueIdentifier,
  setIsDropdownShowing,
  multiSelect,
  selectedDropdownItems,
  setSelectedDropdownItems,
  dropdownButton,
  item,
  isChecked = null,
  handleClick = null,
}) {
  function handleMenuKeyDown(e, keyCode = "", currentIndex = 0) {
    if (keyCode === "ArrowUp") {
      e.preventDefault();
      const previousElement = document.getElementById(
        `dropdown-button-${uniqueIdentifier}-${currentIndex - 1}`
      );
      if (previousElement) previousElement.focus();
    } else if (keyCode === "ArrowDown") {
      const nextElement = document.getElementById(
        `dropdown-button-${uniqueIdentifier}-${currentIndex + 1}`
      );
      e.preventDefault();
      if (nextElement) nextElement.focus();
    } else if (keyCode === "Escape") {
      setIsDropdownShowing(false);
      if (dropdownButton) dropdownButton.current.focus();
    }
  }

  function handleMenuButtonClick(currentItem) {
    if (multiSelect) {
      const copyOfSelectedItems = [...selectedDropdownItems];
      const selectedItemIndex = copyOfSelectedItems.findIndex(
        (item) => item.id === currentItem.id
      );
      // if there is a custom handleClick method defined
      if (handleClick) {
        handleClick();
      } else {
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
      }
    } else {
      setSelectedDropdownItems([currentItem]);
      setIsDropdownShowing(false);
    }

    if (dropdownButton) dropdownButton.current.focus();
  }

  return (
    <MenuItem
      onKeyDown={(e) => handleMenuKeyDown(e, e.key, item.id)}
      key={`dropdown-item-${uniqueIdentifier}-${item.id}`}
    >
      <MenuButton
        id={`dropdown-button-${uniqueIdentifier}-${item.id}`}
        onClick={() => handleMenuButtonClick(item)}
      >
        {multiSelect && (
          <DropdownCheckbox
            // There may be a custom isChecked property defined
            isChecked={
              isChecked !== null
                ? isChecked
                : selectedDropdownItems.findIndex(
                    (selectedItem) => selectedItem.id === item.id
                  ) !== -1
            }
          />
        )}
        {item.text}
      </MenuButton>
    </MenuItem>
  );
}

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

export default DropdownItem;
