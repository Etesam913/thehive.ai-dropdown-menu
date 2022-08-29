import styled from "styled-components";

function DropdownMenu({
  dropdownItems = [],
  selectedDropdownItems = [],
  setSelectedDropdownItems,
  dropdownWidth = "17rem",
  direction = "down",
}) {
  return (
    <Menu width={dropdownWidth}>
      <li>test content 1</li>
      <li>test content 2</li>
      <li>test content 3</li>
    </Menu>
  );
}

const Menu = styled.ul`
  width: ${(props) => props.width};
  background-color: #e3e3e3;
  position: absolute;
  list-style-type: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transform: translateY(0.15rem);
`;

export default DropdownMenu;
