import { Estilos } from '../estilos/Estilos.style';
import React from 'react'
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import DayJS from 'react-dayjs';
import { Link, useParams } from 'react-router-dom';

const Pais = () => {

  
    useEffect(()=>{
        obtenerdatosPais()
    }, [])

    let {Slug} = useParams();
    

    const [unPais, setunPais] = useState([])  
    const obtenerdatosPais = async () => {
        const data = await fetch (`https://api.covid19api.com/dayone/country/${Slug}/status/confirmed`)
        const elementos = await data.json()
        setunPais(elementos)
    }
    
    return (
        <Estilos>
          <h1 className="titulos"  >{Slug}</h1>
    
        <div className='contenido' id='contenido'>
        <Link to={`/`}><button>regresar</button></Link>
        {unPais.map((pais,index) => 
        <div className='cajaPaises'>
            <Card key={index}>
              <CardContent>
                <CardActionArea>
                <Typography gutterBottom variant="h5" >Fecha:  
                 <DayJS format="MM/DD/YYYY">{pais.Date}</DayJS>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Codigo de pais: {pais.CountryCode}  
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Lat: {pais.Lat}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Lon: {pais.Lon}  
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Caso: {pais.Cases}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                Estatus: "{pais.Status}"
                </Typography>
                </CardActionArea>
              </CardContent>
            
            </Card>
        </div>
            )}
        </div>
      
       
        </Estilos>
    );
}
export default Pais;