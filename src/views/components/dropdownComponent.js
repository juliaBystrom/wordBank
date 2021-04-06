import React, { useState } from 'react';
import { DropdownComponentWrapper, DropdownButton, DropdownComponentItem } from '.';

/*
Just a Dropdown view

Input: 

• list: List of choosies to select
• title: Title to display on button showing the list of chooises
• State variables handles by a presenter:
    - open : If the selector is open
• Functions: Functions
    - toggle: fuction to call when opening or closing the selector
    - onClick: function to handle when a selector have been choosen

TODO: Create key extractor to not be in need of BANKID as key

*/

const DropdownComponent = ({ list, title, open, toggle, onSelectionDone }) => {


    return (
        <DropdownComponentWrapper>
            <DropdownButton
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}>
                <div>
                    <p>{title}</p>
                </div>
                <div>
                    <p>{open ? 'Ʌ' : 'V'}</p>
                </div>

            </DropdownButton>
            {open && (
                <DropdownComponentItem>
                    {list.map(item => (
                        <li key={item.boardID}>
                            <button type="button" onClick={(e) => {
                                console.log("pressed button with item: ");
                                console.log(item.title);
                                onSelectionDone(item);

                            }}>
                                <span>{item.title}</span>
                            </button>
                        </li>
                    ))}
                </DropdownComponentItem>
            )}
        </DropdownComponentWrapper>

    );
}

export default DropdownComponent;