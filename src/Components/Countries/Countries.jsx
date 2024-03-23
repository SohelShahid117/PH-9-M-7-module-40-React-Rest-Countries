import { useEffect } from "react";
import { useState } from "react";
import Countryyy from "../Countryyy/Countryyy";
import './countriess.css'


const Countries = () => {
    const [countriesss,setCountriesss] = useState([])

    // const [markVisitedCountries,setMarkVisitedCountries] = useState([])

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


    const handleVisitedCountries = (country) =>{
        console.log(country)
        alert('hi')
    }
    return (
        <div >
            <h3>Countries:{countriesss.length}</h3>
            <div>
                Visited countries :
                <ul>

                </ul>
            </div>
            {/* <Countryyy cntryyy = {countriesss}></Countryyy> */}
            <div className="countriess">
                {
                    countriesss.map((cntry)=>
                        <Countryyy 
                            key={cntry.ccn3} 
                            counntryyy = {cntry}
                            handleVisitedCountries = {handleVisitedCountries}
                        ></Countryyy>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;