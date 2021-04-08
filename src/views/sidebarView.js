import React from "react";
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Burger, Menu, Dropdown, DropdownItem} from './components';
import {Link} from "react-router-dom";


export default function SidebarView(props){

    const banks = props.banks;

    return (
        <ThemeProvider theme={theme}>
        <style/>
        <div>
            <Burger open={props.open} onClick={()=>props.setOpen(!props.open)}>         
                <div /><div /><div />
            </Burger>
            <Menu open={props.open}>
            
                <Dropdown onClick={()=>props.setDropBanks(!props.dropBanks)} >
                    <span aria-label="Select bank"></span>
                    Select bank
                </Dropdown>
                {banks.map((bank) => (
                    <DropdownItem drop={props.dropBanks}>
                        <Link to="/bank">
                            {bank.languageFrom} - {bank.languageTo}
                        </Link>
                    </DropdownItem>
                ))}

                <Dropdown onClick={()=>props.setDropFilter(!props.dropFilter)}>
                    <span aria-label="Filter on tags"></span>
                    Filter on tags
                </Dropdown>
                {props.currentBank["tags"].map((t) => (
                    <DropdownItem drop={props.dropFilter}>
                        <input type="checkbox" id={t.tag} name={t.tag}
                            onClick={()=>props.onFilter(t.tag)}
                        />
                        <label for={t.tag} >{t.tag}</label>
                    </DropdownItem>
                ))}

                <Dropdown onClick={()=>props.setDropSort(!props.dropSort)}>
                    <span aria-label="Sort boards"></span>
                    Sort boards
                </Dropdown>
                {props.sorts.map((s) => (
                    <DropdownItem drop={props.dropSort}>
                        <input type="checkbox" id={s.sorting} name={s.sorting}
                            onClick={()=>props.onSort(s.sorting)}
                        />
                        <label for={s.sorting} >{s.sorting}</label>
                    </DropdownItem>
                ))}
            </Menu>
        </div>
        </ThemeProvider>

    );
}    
