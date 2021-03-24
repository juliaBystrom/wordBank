import React from "react";
import {Link} from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';



function SidebarView(props){
    return (
        <ProSidebar>
        <Menu iconShape="square">
            <MenuItem>
                Dashboard
                <Link to="/" />
            </MenuItem>
            <SubMenu title="Components">
            {props.model.banks.map((bank)=>
                <MenuItem>{bank.title}</MenuItem>
            )}
            <MenuItem>Component 2</MenuItem>
            </SubMenu>
        </Menu>
        </ProSidebar>
        );
}    


export default SidebarView
      