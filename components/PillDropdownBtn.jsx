import { Dropdown, ButtonGroup } from "react-bootstrap";
import { pillBtnStyle } from "../styles/Styles";

export function PillDropdownBtn ({ title, children }) {

    return (
        <Dropdown as={ButtonGroup} >
            <Dropdown.Toggle style={pillBtnStyle} id="dropdown-basic">
                {title}
            </Dropdown.Toggle>
            <Dropdown.Menu >
                {children}
            </Dropdown.Menu>
        </Dropdown>
    )
}
