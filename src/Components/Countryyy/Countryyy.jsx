import { useState } from 'react';
import './contryyy.css'
import CountryDetails from '../CountryDetail/CountryDetails';

const Countryyy = ({counntryyy,handleVisitedCountries,handleVisitedFlags}) => {
    // console.log(JSON.parse(cntryyy))
    console.log(counntryyy)

    const {name,flags,population,area,cca3} = counntryyy
    // console.log(name)
    // let i = 0;

    const [visited,setVisited] = useState(false);
    const handleVisited = () =>{
        // setVisited(true)
        setVisited(!visited)
        // console.log('hi')
    }

    // console.log(handleVisitedCountries)
    // console.log(handleVisitedFlags)



    return (
        <div className={ `cntry ${visited && 'visited'} `}>

            {/* <h1>{i}:name</h1> */}

            <h4 style={{color:visited? 'orange' : 'black'}}>Country name:{name?.common}</h4>

            <img src={flags.png}/>

            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <small>Code : {cca3}</small>

            <br/>
            {/* <button onClick={handleVisitedCountries()}>Mark Visited</button> */}
            <button onClick={()=>handleVisitedCountries(counntryyy)}>Mark Visited</button>
            <br/>
            <button onClick={()=>handleVisitedFlags(counntryyy.flags.png)}>Add visited Flag</button>
            <br />

            {/* <button onClick={handleVisited}>Visited</button> */}
            <button onClick={handleVisited}>{visited?'Visited':'Going'}</button>

            {/* {visited && 'I visit the country'} */}
            {visited ? 'I have visited this country' : 'I want to visit this country'}

            <hr />
            <CountryDetails
                counntryyy = {counntryyy}
                handleVisitedCountries = {handleVisitedCountries}
                handleVisitedFlags = {handleVisitedFlags}
            ></CountryDetails>
        </div>
    );
};

export default Countryyy;