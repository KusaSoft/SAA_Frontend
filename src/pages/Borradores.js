import React from "react";
import Lista from "../components/ListaSolicitud/Lista";
import useStatusList from "../hooks/useStatusList";
import { STATUS } from "../services/Constant";
function Borradores(){
    // const [value, setValue] = React.useState(0);
    // const [sentList] = useStatusList({ status: STATUS.SENT });
    const [draftList, setStatusListData, deleteElement] = useStatusList({ status: STATUS.DRAFT });
    // const handleChange = (event, newValue) => {
    // setValue(newValue);
    // };
    return(
        <div style={{background: "#FAFBFC",
                        flex: "1",
                        width: "100%",
                        height: "100%",
                        minHeight: "95vh",}}>
            <h1 style={{ color: "#172B4D", 
                        textAlign: "center", 
                        fontFamily: "roboto" }} >Borradores</h1> 
            <div style={{paddingLeft:"30px", paddingRight:"30px"}}>
                <Lista list={draftList ? draftList : []} />
            </div>
        </div>
    );
}export default Borradores 