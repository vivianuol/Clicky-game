import React from "react";
import { Nav, NavItem } from 'react-bootstrap';

export default class Nav extends React.Component {
    render() {
        return (
            <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
                <NavItem eventKey={1} href="/home">
                    NavItem 1 content
                </NavItem>
                <NavItem eventKey={2} title="Item">
                    NavItem 2 content
                </NavItem>
                <NavItem eventKey={3} disabled>
                    NavItem 3 content
                </NavItem>
            </Nav>
        );
    }
}