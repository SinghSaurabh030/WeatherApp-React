import TextField from '@mui/material/TextField';
import './SearchBox.css';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';


export default function SearchBox({Getter}){
    let [city,setCity]=useState();
    let [error,setError]=useState('');
    let url='https://api.openweathermap.org/data/2.5/weather?q=';
    let key='686926525558b87fe7437c41ef401cf5';
    let changeHandle=(event)=>{
        setCity(event.target.value);
    }
    let submitHandle=async (event)=>{
        event.preventDefault();
        console.log(city);
        
        try{
            let streamR=await fetch(`${url}`+`${city}`+`&appid=`+`${key}`+`&units=metric`);
        let response=await streamR.json();
        console.log(response);
        let result={
            city:response.name,
            temp:response.main.temp,
            tempMax:response.main.temp_max,
            tempMin:response.main.temp_min,
            humidity:response.main.humidity
        }
        Getter(result);
        setError('');
        setCity("");
        }catch(err){
            setError('Entered City Not Found');
        }
    }
   
    return (
        <div className='Searcher'>
            <br></br>
            <TextField id="outlined-basic" label="Enter City" variant="outlined" value={city} onChange={changeHandle}/>
            <br></br>
            <br></br>
            <Button variant="contained" type='submit' onClick={submitHandle} style={{fontFamily:'monospace'}}>Search</Button>
            <p style={{color:'red',fontSize:'20px',fontFamily:'monospace'}}>{error}</p>
        </div>
    );
}