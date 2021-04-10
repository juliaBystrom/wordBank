import React, { useState } from 'react';
import { SidebarView } from "../views"
import useModelProp from './useModelProp.js';

export default function SidebarPresenter({model}){

    const [open, setOpen] = useState(0);
    const [dropBanks, setDropBanks] = useState(0);
    const [dropFilter, setDropFilter] = useState(0);
    const [dropSort, setDropSort] = useState(0);

    const banks = useModelProp(model, "banks");
    const sorts = useModelProp(model, "sorts");
    const currentBankID = useModelProp(model, "currentBank");

    const currentBank = banks.filter(b => {
        return b.bankID === currentBankID;
      })[0]

    return <SidebarView
        open={open} setOpen={setOpen}
        dropBanks={dropBanks} setDropBanks={setDropBanks}
        dropFilter={dropFilter} setDropFilter={setDropFilter}
        dropSort={dropSort} setDropSort={setDropSort}
        onFilter={(tag) => model.filterOnTag(tag)}
        onSort={(sorting) => 
                sorts.filter(s => {
                    return s.sorting === sorting;
                })[0].func()
        }
        currentBank={currentBank}
        sorts={sorts}
        banks={banks}
        onSelectBank={(bankID) => model.setCurrentBank(bankID)}        
    />
}

