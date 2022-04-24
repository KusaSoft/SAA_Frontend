import React from 'react';
import Card from './Card';
const mockRequest = [
  {
    IDreserva: 1,
	  namedoc: "leticia",
	  materia: "introduccion a la Programacion",
	  grupo: "2",
	  totalEst:"150",
	  motivo:"examen",
	  fecha: "10/10/22",
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
	  motivo:"examen",
	  fecha: "20/10/22",
	  horaINI: "11:15",
	  horaFin:"14:15",
	  grupoOtro:"RosemaryG1"
  },
  {
    IDreserva: 2,
	  namedoc: "leticia",
	  materia: "Taller Ingenieria Software",
	  grupo: "3",
	  totalEst:"15",
	  motivo:"examen",
	  fecha: "30/10/22",
	  horaINI: "11:15",
	  horaFin:"12:45",
	  grupoOtro:"RosemaryG1"
  }
]

const Lista = ()=> {
  if(mockRequest.length!==0){//si tiene porlomenos 1 reserva 
    console.log(mockRequest);     
    return (
      <div style={{ width:"99%", margin:"auto", }}> 
        {mockRequest.map((mockRequestTemp) => {
        return (
          <div key={mockRequestTemp[0]}>
            <Card mockRequest={mockRequestTemp} />
          </div>
        );
        })}
      </div>
    );    
  }else{
    return(
    <div>
      No tiene ninguna solicitud pendiente
    </div>
    );
  }
};export default Lista;