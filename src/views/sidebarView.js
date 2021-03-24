import React from "react";
import {Link} from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';



export default function SidebarView(props){

    return (
        <ProSidebar>
        <Menu iconShape="square">
            <MenuItem>
                Settings
                <Link to="/" />
            </MenuItem>
                <SubMenu title="Banks">
                {props.inactiveBanks.map((bankID)=>
                    <MenuItem onClick={e => props.onSelectBank(bankID)}>{bankID}</MenuItem>
                )}
                </SubMenu>
                <SubMenu title="Filter">
                    {props.tags.map((tag)=>
                        <MenuItem onClick={e => props.onFilterBank(tag)}>{tag}</MenuItem>
                    )}  
                </SubMenu>
                <SubMenu title="Sort Boards">
                    {props.sortings.map((sorting)=>
                        <MenuItem onClick={e => props.onSortBoards(sorting)}>{sorting}</MenuItem>
                    )}  
                </SubMenu>
        </Menu>
        </ProSidebar>
        );
}    
