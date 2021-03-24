import { SidebarView } from "../views"
import useModelSubclassProperty from "./useModelSubclassProperty"

function SidebarPresenter(props){
    const [sidebar, setSidebar] = React.useState("");

    const user = useModelProperty(props.model, "userID")
    const activeBankTitle = useModelSubclassProperty(props.model, "banks", props.model.currentBank, "title");
    // Iterera över alla titlar?
    const inactiveBankTitles = useModelSubclassProperty(props.model, "banks", props.model.currentBank, "title");
    // Hmm ska man ha en subsubclass också...? Måste komma åt taggar?
    const tags = useModelProperty(props.model, "banks", props.model.currentBank , "cards");
    
    return <SidebarView
        user={user}
        activeBankTitle={activeBankTitle}
        inactiveBankTitles={inactiveBankTitles}
        tags={tags}
        setCurrentBank={(x)=>{props.model.setCurrentBank(x)}}
        filterBank={(x)=>{props.model.filterBank(x)}}
        sortBoards={(x)=>{props.model.sortBoards(x)}}
    />
}

export default SidebarPresenter