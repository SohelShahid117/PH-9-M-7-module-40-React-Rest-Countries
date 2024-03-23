import { useEffect } from "react";
import { useState } from "react";
import Countryyy from "../Countryyy/Countryyy";
import './countriess.css'


const Countries = () => {
    const [countriesss,setCountriesss] = useState([])
    const [visitedCountries,setVisitedCountries] = useState([])
    const [visitedFlags,setVisitedFlags] = useState([])


    // const [markVisitedCountries,setMarkVisitedCountries] = useState([])

    useEffect(()=>{
        // const url = `https://restcountries.com/v3.1/all`
        const url = `https://restcountries.com/v3.1/all`
        // console.log(url)
        fetch(url)
        .then((res)=>res.json())
        // .then((data)=>console.log(data))
        .then((data)=>setCountriesss(data))
        // console.log(countriesss)

    },[])


    const handleVisitedCountries = (country) =>{
        console.log(country);
        const newVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
        // alert('hi')
    }

    const handleVisitedFlags = (flag) =>{
        const newVisitedFlag = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlag)
        console.log('adding flag')
    }

    return (
        <div >
            <h3>Countries:{countriesss.length}</h3>

            <div>
                <h4>Visited countries : {visitedCountries.length}</h4>
                {/* Visited countries : {newVisitedCountries.length} */}
                <ul>
                    {
                        visitedCountries.map((newCntry)=><li key={newCntry.ccn3}>{newCntry.name.common}</li>)
                    }

                </ul>
            </div>
            
            <div className="flag-container">
                {
                    visitedFlags.map((flag,indx)=><img key={indx} src={flag}/>)
                }

            </div>

            {/* <Countryyy cntryyy = {countriesss}></Countryyy> */}

            <div className="countriess">
                {
                    countriesss.map((cntry)=>
                        <Countryyy 
                            key={cntry.ccn3} 
                            counntryyy = {cntry}
                            handleVisitedCountries = {handleVisitedCountries}
                            handleVisitedFlags = {handleVisitedFlags}
                        ></Countryyy>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;