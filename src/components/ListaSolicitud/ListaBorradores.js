import React from 'react';
import CardBorrador from './CardBorrador';

const mockRequest = [
  {
    IDreserva: 1,
	  namedoc: "leticia",
	  materia: "  ",
	  grupo: "2",
	  totalEst:"150",
	  motivo:"examen",
	  fecha: "  ",
	  horaINI: "09:45",
	  horaFin:"12:45",
    grupoOtro:"costasG1"
  },
  {
    IDreserva: 2,
	  namedoc: "leticia",
	  materia: "Elementos de la programacion",
	  grupo: "1",
	  totalEst:"100",
	  motivo:" ",
	  fecha: "20/10/22",
	  horaINI: "11:15",
	  horaFin:"14:15",
	  grupoOtro:"RosemaryG1"
  }
]


const ListaBorradores=()=> {
  
  if(mockRequest.length!==0){//si tiene porlomenos 1 borrador      
    return (
      <div style={{ width:"99%", margin:"auto", }}> 
        {mockRequest.map((mockRequestTemp) => {
        return (
          <div key={mockRequestTemp[0]}>
            <CardBorrador mockRequest={mockRequestTemp} />
          </div>
        );
        })}
      </div>
    );    
  }else{
    return(
    <div>
      No tiene ningun borrador 
    </div>
    );
  }
};export default ListaBorradores;