import React from "react";
// import {Link} from "react-router-dom";
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import { ThemeProvider } from 'styled-components';
import {style} from '../style';
import { theme } from '../theme';
import { Burger, Menu, Dropdown, DropdownItem} from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


export default function SidebarView(props){
    // const tags = ["Question", "Adjective"];
    const banks = ["SWE -> ENG", "SWE -> FR"];

    return (
        <ThemeProvider theme={theme}>
            <style/>
            <div>
                <Burger open={props.open} onClick={()=>props.setOpen(!props.open)}>         
                    <div /><div /><div />
                </Burger>
                <Menu open={props.open}>
                {/* Routing link? */}

                    <Dropdown onClick={()=>props.setDrop(!props.drop)}>
                        <span aria-label="Settings"></span>
                        Banks <FontAwesomeIcon icon={faAngleDown} />
                    </Dropdown>
                    {banks.map((bank) => (
                        <DropdownItem drop={props.drop}>{bank}</DropdownItem>
                    ))}
                
                </Menu>
            </div>
        </ThemeProvider>

    );
}    
