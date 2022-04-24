import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const CardBorrador=(props)=> {
    return (
      <div          style={{background:"#172B4D", 
                    color:"white", 
                    display:"flex", 
                    justifyContent:"space-between",
                    marginTop:"20px"}}>
        <div style={{paddingLeft:"10px", marginBlock: "10px"}}>
            <b style={{fontWeight:"bold"}}>Materia: </b> {props.mockRequest.materia} 
            <div>
            <b style={{fontWeight:"bold"}}>Motivo: </b> {props.mockRequest.motivo}
            </div> 
        </div>
        <div style={{marginBlock: "10px"}}>
            <div>
            <b style={{fontWeight:"bold"}}>Fecha: </b> {props.mockRequest.fecha}
            </div> 
            <div>
            <DeleteIcon onClick={ () => alert("Borrar")} sx={{marginLeft:"100px"}}/>
            </div>
        </div> 
      </div>
    );
  };export default CardBorrador;