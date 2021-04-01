import React from "react";
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Burger, Menu, Dropdown, DropdownItem} from './components';


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
                        Banks
                    </Dropdown>
                    {banks.map((bank) => (
                        <DropdownItem drop={props.drop}>{bank}</DropdownItem>
                    ))}
                
                </Menu>
            </div>
        </ThemeProvider>

    );
}    
