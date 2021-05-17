import {
  DropdownComponentWrapper,
  DropdownButton,
  DropdownComponentItem,
} from "../../styledComponents";

/*
Just a Dropdown view

Input: 

• list: List of choices to select from
• title: Title to display on button showing the list of choices
• State variables handles by a presenter:
    - open : If the selector is open
• Functions: Functions
    - toggle: function to call when opening or closing the selector
    - onClick: function to handle when a selection has been done
*/

const DropdownComponent = ({
  list,
  title,
  open,
  toggle,
  onSelectionDone,
  keyExtractor,
}) => {
  return (
    <DropdownComponentWrapper>
      <DropdownButton
        role="button"
        onKeyPress={() => toggle()}
        onClick={() => toggle()}
      >
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{open ? "Ʌ" : "V"}</p>
        </div>
      </DropdownButton>
      {open && (
        <DropdownComponentItem>
          {list.map((item) => (
            <li key={keyExtractor(item)}>
              <button
                type="button"
                onClick={(e) => {
                  onSelectionDone(item);
                }}
              >
                <p>{item.title}</p>
              </button>
            </li>
          ))}
        </DropdownComponentItem>
      )}
    </DropdownComponentWrapper>
  );
};

export default DropdownComponent;
