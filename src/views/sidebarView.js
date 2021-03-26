import React from "react";
// import {Link} from "react-router-dom";
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import { ThemeProvider } from 'styled-components';
import {style} from '../style';
import { theme } from '../theme';
import { Burger, Menu, Dropdown, DropdownElem} from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'



export default function SidebarView(props){

    return (
        <ThemeProvider theme={theme}>
            <style/>
            <div>
                <Burger open={props.open} onClick={e => props.onOpen(!props.open)}>         
                    <div/><div/><div/>
                </Burger>
                <Menu open={props.open}>
                {/* Routing link? */}
                    <a href="/" >
                    <Dropdown onClick={e=>props.onDrop(!props.drop)}>
                        <span aria-label="Settings"></span>
                        Settings <FontAwesomeIcon icon={faAngleDown} />

                    </Dropdown>
                    <DropdownElem drop={props.drop}>
                            Hej
                    </DropdownElem>
                    </a> 
                    <a href="/">
                        <span aria-label="Banks"></span>
                        Banks <FontAwesomeIcon icon={faAngleDown} />
                    </a>
                    <a href="/">
                        <span aria-label="Filter"></span>
                        Filter <FontAwesomeIcon icon={faAngleDown} />
                    </a>
                    <a href="/">
                        <span aria-label="Sort boards"></span>
                        Sort boards <FontAwesomeIcon icon={faAngleDown} />
                    </a>
            
                </Menu>
            </div>
        </ThemeProvider>

    );
}    
