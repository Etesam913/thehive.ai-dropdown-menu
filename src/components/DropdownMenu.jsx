import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import DropdownItem from "./DropdownItem";

function DropdownMenu({
  dropdownItems = [],
  selectedDropdownItems = [],
  setSelectedDropdownItems,
  dropdownButton = null,
  multiSelect = false,
  uniqueIdentifier = "",
  setIsDropdownShowing,
  maxHeight = "20rem",
}) {
  const [menuWidth, setMenuWidth] = useState("15rem");

  /*
  This exists to ensure that the dropdown width
  is equal to the dropdown button width.
  */
  useEffect(() => {
    if (dropdownButton) {
      setMenuWidth(dropdownButton.current.clientWidth + "px");
    }
  }, [dropdownButton, setMenuWidth, selectedDropdownItems]);

  const areAllItemsSelected =
    selectedDropdownItems.length === dropdownItems.length;

  const menuItems = dropdownItems.map((item) => {
    return (
      <DropdownItem
        item={item}
        uniqueIdentifier={uniqueIdentifier}
        setIsDropdownShowing={setIsDropdownShowing}
        multiSelect={multiSelect}
        selectedDropdownItems={selectedDropdownItems}
        setSelectedDropdownItems={setSelectedDropdownItems}
        dropdownButton={dropdownButton}
      />
    );
  });

  /*
    If all options are selected, then unselect the options.
    Otherwise, select all the options
  */
  function selectAllItems() {
    if (!areAllItemsSelected) {
      const newSelectedItems = [];
      for (let i = 0; i < dropdownItems.length; i++) {
        newSelectedItems.push(dropdownItems[i]);
      }
      setSelectedDropdownItems(newSelectedItems);
    } else {
      setSelectedDropdownItems([]);
    }
  }

  return (
    <Menu maxHeight={maxHeight} width={menuWidth}>
      {/* This is the select all button */}
      {multiSelect && (
        <DropdownItem
          item={{
            id: 0,
            text: areAllItemsSelected ? "Unselect All" : "Select All",
          }}
          handleClick={selectAllItems}
          isChecked={areAllItemsSelected}
          uniqueIdentifier={uniqueIdentifier}
          setIsDropdownShowing={setIsDropdownShowing}
          multiSelect={true}
          selectedDropdownItems={selectedDropdownItems}
          setSelectedDropdownItems={setSelectedDropdownItems}
          dropdownButton={dropdownButton}
        />
      )}

      {menuItems}
    </Menu>
  );
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
  overflow-y: auto;
  max-height: ${(props) => props.maxHeight};
`;

export default DropdownMenu;
