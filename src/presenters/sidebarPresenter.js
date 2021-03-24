import { SidebarView } from "../views"
import useModelSubclassProperty from "./useModelSubclassProperty"

function SidebarPresenter(props){
    const user = useModelSubclassProperty(props.model, "userID");
    const currentBank = useModelSubclassProperty(props.model, "currentBank");
    const tags = useModelSubclassProperty(props.model, "tags");
    const banks = useModelSubclassProperty(props.model, "banks");
    
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

export default SidebarPresenter