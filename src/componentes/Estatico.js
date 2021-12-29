import { Estilos } from '../estilos/Estilos.style';
import React from 'react'
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const Estatico = () => {
    useEffect(()=>{
        obtenerdatosGlobales()
    }, [])
    const [datos, setDatos] = useState([])
    const obtenerdatosGlobales = async () => {
        const data = await fetch ('https://api.covid19api.com/summary')
        const elementos = await data.json()
        setDatos(elementos.Global)
    }
    return (
    <Estilos>
      <h1 className='titulos'>Resultados Covid</h1>
      <h2 className='titulos'>Resultados Globales</h2>
      <div className='estatico'>
     <div>
      <Card>
        <CardContent>
          <CardActionArea>
          <Typography gutterBottom variant="h5" component="div">
            Nuevos Confirmados
          </Typography>
          <Typography variant="h5" color="text.secondary">
          {datos.NewConfirmed}
          </Typography>
          </CardActionArea>
        </CardContent>
    </Card>
    </div>
    <div>
      <Card>
        <CardContent>
          <CardActionArea>
          <Typography gutterBottom variant="h5" component="div">
            Total Confirmados
          </Typography>
          <Typography variant="h5" color="text.secondary">
          {datos.TotalConfirmed}
          </Typography>
          </CardActionArea>
        </CardContent>
    </Card>
    </div>
    <div>
      <Card>
        <CardContent>
          <CardActionArea>
          <Typography gutterBottom variant="h5" component="div">
            Muertes Recientes
          </Typography>
          <Typography variant="h5" color="text.secondary">
          {datos.NewDeaths}
          </Typography>
          </CardActionArea>
        </CardContent>
    </Card>
    </div>
    <div>
      <Card>
        <CardContent>
          <CardActionArea>
          <Typography gutterBottom variant="h5" component="div">
            Total de Muertes
          </Typography>
          <Typography variant="h5" color="text.secondary">
          {datos.TotalDeaths}
          </Typography>
          </CardActionArea>
        </CardContent>
    </Card>
    </div>
    </div>
    </Estilos>
    );
}
 
export default Estatico;

