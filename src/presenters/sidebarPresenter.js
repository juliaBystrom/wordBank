
import React, { useState } from 'react';
import { SidebarView } from "../views"
import useModelSubclassProperty from "./useModelSubclassProperty"
import useModelProperty from "./useModelProperty"

export default function SidebarPresenter({model}){


    const [open, setOpen] = useState(0);
    const [drop, setDrop] = useState(0);

    const userID = useModelProperty(model, "userID")
    const currentBank = useModelSubclassProperty(model, "banks", model.currentBank, "bankID");
    // Iterera över alla titlar?
    //const inactiveBanks = useModelProperty(model, "banks");
    // Hmm ska man ha en subsubclass också...? Måste komma åt taggar?
    //const tags = useModelSubclassProperty(model, "banks", model.currentBank , "cards");


    return <SidebarView
        open={open} setOpen={setOpen}
        drop={drop} setDrop={setDrop}
        user={userID}
        currentBank={currentBank}
        inactiveBanks={[1, 2, 3]}
        tags={["Question", "Verb", "Greeting"]}
        sorting={["Latest Used", "Alphabetically"]}
        onSelectBank={(bankID) => model.setCurrentBank(bankID)}
        onSortBoards={(sorting)=> model.sortBoards(sorting)}
        
        onFilterBank={(tag)=>{model.filterBank(tag)}}
        // sortBoards={(sorting)=>{model.sortBoards(sorting)}}
    />
}
