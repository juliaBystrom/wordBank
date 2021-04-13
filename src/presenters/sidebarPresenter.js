import React, { useState } from 'react';
import { SidebarView } from "../views"
import useModelProp from './useModelProp.js';
import useBankProp from './useBankProp.js';

export default function SidebarPresenter({model}){

    const [open, setOpen] = useState(0);
    const [dropBanks, setDropBanks] = useState(0);
    const [dropFilter, setDropFilter] = useState(0);
    const [dropSort, setDropSort] = useState(0);

    const banks = useModelProp(model, "banks");
    const sortings = useModelProp(model, "sortings");
    const tags = useBankProp(model, "tags");

    return <SidebarView
        open={open} setOpen={setOpen}
        dropBanks={dropBanks} setDropBanks={setDropBanks}
        dropFilter={dropFilter} setDropFilter={setDropFilter}
        dropSort={dropSort} setDropSort={setDropSort}
        onFilter={(tag) => model.filterOnTag(tag)}
        onSort={(chosenSorting) => 
                sortings.filter((sorting) => {
                    return sorting.name === chosenSorting;
                })[0].func()
        }
        sortings={sortings}
        banks={banks}
        tags={tags}
        onSelectBank={(bankID) => model.setCurrentBank(bankID)}        
    />
}

