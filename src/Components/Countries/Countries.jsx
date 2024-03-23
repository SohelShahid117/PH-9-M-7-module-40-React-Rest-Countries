import { useEffect } from "react";
import { useState } from "react";
import Countryyy from "../Countryyy/Countryyy";


const Countries = () => {
    const [countriesss,setCountriesss] = useState([])
    useEffect(()=>{
        // const url = `https://restcountries.com/v3.1/all`
        const url = `https://restcountries.com/v3.1/all`
        // console.log(url)
        fetch(url)
        .then((res)=>res.json())
        // .then((data)=>console.log(data))
        .then((data)=>setCountriesss(data))
        console.log(countriesss)

    },[])
    return (
        <div>
            <h3>Countries:{countriesss.length}</h3>
            {/* <Countryyy cntryyy = {countriesss}></Countryyy> */}
            {
                countriesss.map((cntryyy)=><Countryyy cntryyy = {countriesss}></Countryyy>)
            }
        </div>
    );
};

export default Countries;