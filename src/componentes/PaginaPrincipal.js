import { Estilos } from '../estilos/Estilos.style';
import React from 'react'
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import DayJS from 'react-dayjs';
import {Link } from "react-router-dom";

const PaginaPrincipal = () => {
    useEffect(()=>{
        obtenerdatosCiudades()
    }, [])
    const [ciudades, setCiudades] = useState([])  
    const obtenerdatosCiudades = async () => {
        const data = await fetch ('https://api.covid19api.com/summary')
        const elementos = await data.json()
        setCiudades(elementos.Countries)
    }
    return (
        <Estilos>
        <div className='contenido' id='contenido'>
        {ciudades.map((ciudad,index) => 
        <div className='cajaPaises'>
            <Card>
              <CardContent key={index}>
                <Typography gutterBottom variant="h5" >
                {ciudad.Country}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Codigo de pais: {ciudad.CountryCode}  
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Pais: {ciudad.Slug}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Nuevos Confirmados: {ciudad.NewConfirmed}  
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Total de Confirmados: {ciudad.TotalConfirmed}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                Nuevas Muertes: {ciudad.NewDeaths}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                Total Recuperados: {ciudad.TotalRecovered}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                Fecha Ultima Actualización: <DayJS format="MMMM/DD/YYYY">{ciudad.Date}</DayJS>
                </Typography>
              </CardContent>
              <CardActions>
            <Link to={`/${ciudad.Slug}`}>  
        <Button size="medium" color="primary">
          Ir
        </Button>
        </Link>  
      </CardActions>
            </Card>
        </div>
            )}
        </div>
      
       
        </Estilos>
    );
}
export default PaginaPrincipal;

//console.log(datos)
        //console.log(ciudades)
        /*ciudades.forEach(ciudad=>{
            ciudadees +=`<div class="cajasPaises">
            <h3 class="titulos">${ciudad.Country}</h3>
            <h5>Codigo de pais: ${ciudad.CountryCode}</h5>
            <h5>Pais: ${ciudad.Slug}</h5>
            <h5>Nuevos Confirmados: ${ciudad.NewConfirmed}</h5>
            <h5>Total de Confirmados: ${ciudad.TotalConfirmed}</h5>
            <h5>Nuevas Muertes: ${ciudad.NewDeaths}</h5>
            <h5>Total de Muertes: ${ciudad.TotalDeaths}</h5>
            <h5>Nuevos Recuperados: ${ciudad.NewRecovered}</h5>
            <h5>Total Recuperados: ${ciudad.TotalRecovered}</h5>
            <h5>Fecha: ${ciudad.Date}</h5>
            <button> Ver </button>
        </div>`*/
        //document.getElementById('contenido').innerHTML = ciudadees;

