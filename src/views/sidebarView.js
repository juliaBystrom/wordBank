import React from "react";
// import {Link} from "react-router-dom";
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import { ThemeProvider } from 'styled-components';
import {style} from '../style';
import { theme } from '../theme';
import { Burger, Menu} from './components';

export default function SidebarView(props){

    return (
        <ThemeProvider theme={theme}>
            <>
            <style/>
            <div>

                <Burger open={props.open} onClick={e => props.onOpen(!props.open)}>
                            
                    <div />
                    <div />
                    <div />

                </Burger>
                <Menu open={props.open}>
                        <a href="/">
                        <span role="img" aria-label="Settings"></span>
                        Settings
                        </a>
                        <a href="/">
                        <span role="img" aria-label="Banks"></span>
                        Banks
                        </a>
                        <a href="/">
                        <span role="img" aria-label="Filter"></span>
                        Filter
                        </a>
                        <a href="/">
                        <span role="img" aria-label="Sort boards"></span>
                        Sort boards
                        </a>
                </Menu>
                
            </div>
            </>
        </ThemeProvider>

                // <ProSidebar>
        // <Menu iconShape="square">
        //     <MenuItem>
        //         Settings
        //         <Link to="/" />
        //     </MenuItem>
        //         <SubMenu title="Banks">
        //         {props.inactiveBanks.map((bankID)=>
        //             <MenuItem onClick={e => props.onSelectBank(bankID)}>{bankID}</MenuItem>
        //         )}
        //         </SubMenu>
        //         <SubMenu title="Filter">
        //             {props.tags.map((tag)=>
        //                 <MenuItem onClick={e => props.onFilterBank(tag)}>{tag}</MenuItem>
        //             )}  
        //         </SubMenu>
        //         <SubMenu title="Sort Boards">
        //             {props.sortings.map((sorting)=>
        //                 <MenuItem onClick={e => props.onSortBoards(sorting)}>{sorting}</MenuItem>
        //             )}  
        //         </SubMenu>
        // </Menu>
        // </ProSidebar>
    );
}    
