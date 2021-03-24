function SidebarPresenter(props){
    const user = useModelProperty(props.model, "userID");
    const currentBank = useModelProperty(props.model, "currentBank");
    const tags = useModelProperty(props.model, "tags");
    const banks = useModelProperty(props.model, "banks");
    
    return <SidebarView
        user={user}
        currentBank={currentBank}
        tags={tags}
        banks={banks}
        setCurrentBank={(x)=>{props.model.setCurrentBank(x)}}
        filterBank={(x)=>{props.model.filterBank(x)}}
        sortBoards={(x)=>{props.model.sortBoards(x)}}
    />
}