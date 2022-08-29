import styled from "styled-components";
function DropdownCheckbox({ isChecked = true }) {
  return (
    <Checkbox isChecked={isChecked}>
      {isChecked && (
        <Checkmark viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </Checkmark>
      )}
    </Checkbox>
  );
}

const Checkbox = styled.span`
  height: 0.9rem;
  width: 0.9rem;
  border-radius: 0.25rem;
  outline: 3px solid #8dbef7;
  margin-right: 0.5rem;
  display: inline-block;
  background-color: ${(props) => (props.isChecked ? "#8dbef7" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Checkmark = styled.svg`
  height: 0.8rem;
  width: 0.8rem;
  fill: currentColor;
`;

export default DropdownCheckbox;
