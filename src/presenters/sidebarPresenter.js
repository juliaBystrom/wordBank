import React from 'react'
import { SidebarView } from "../views"
import useModelSubclassProperty from "./useModelSubclassProperty"
import useModelProperty from "./useModelProperty"

export default function SidebarPresenter(props){

    const userID = useModelProperty(props.model, "userID")
    const open = useModelProperty(props.model, "open")
    const currentBank = useModelSubclassProperty(props.model, "banks", props.model.currentBank, "bankID");
    // Iterera över alla titlar?
    //const inactiveBanks = useModelProperty(props.model, "banks");
    // Hmm ska man ha en subsubclass också...? Måste komma åt taggar?
    //const tags = useModelSubclassProperty(props.model, "banks", props.model.currentBank , "cards");


    return <SidebarView
        open={open}
        onOpen ={(o) => props.model.setOpen(o)}
        user={userID}
        currentBank={currentBank}
        inactiveBanks={[1, 2, 3]}
        tags={["Question", "Verb", "Greeting"]}
        sortings={["Latest Used", "Alphabetically"]}
        onSelectBank={(bankID) => props.model.setCurrentBank(bankID)}
        onSortBoards={(sorting)=> props.model.sortBoards(sorting)}
        
        onFilterBank={(tag)=>{props.model.filterBank(tag)}}
        // sortBoards={(sorting)=>{props.model.sortBoards(sorting)}}
    />
}
