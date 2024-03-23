const CountryData = ({counntryyy,handleVisitedCountries,handleVisitedFlags}) => {
    console.log(counntryyy)
    console.log(handleVisitedCountries)
    console.log(handleVisitedFlags)
    return (
        <div>
            <p><small>Country : {counntryyy.name.common}</small></p>
            
        </div>
    );
};

export default CountryData;