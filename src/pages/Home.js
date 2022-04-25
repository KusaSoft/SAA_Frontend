import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Lista from '../components/ListaSolicitud/Lista'
import ListaBorradores from "../components/ListaSolicitud/ListaBorradores";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <div style={{ background:"#FAFBFC",flex: "1", 
         width:'100%', height:"100%", minHeight:"95vh"  }}>
      <h1 style={{color: "#172B4D", textAlign:"center", fontFamily:"roboto"}}>Lista de Solicitudes</h1>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' ,paddingX:"30px"}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered textColor="black" indicatorColor="inherit" variant="fullWidth" >
          <Tab label="Pendientes" {...a11yProps(0)} sx={{ width: '40%', background:value==0?"#172B4D":"#EBECF0" , color:value!==0? "black":"white" }}/>
          <Tab label="Borradores" {...a11yProps(1)} sx={{ width: '40%', background:value==1?"#172B4D":"#EBECF0", color:value!==1? "black":"white" }}/>
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} sx={{ width: '100%'}}>
        {/* <div style={{background:"red", width:"99%", margin:"auto"}}>hola que tal</div>  */}
        <Lista/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListaBorradores/>
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </div>
  );
}