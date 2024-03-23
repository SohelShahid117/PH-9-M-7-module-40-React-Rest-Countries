import CountryData from "../CountryData/CountryData";

// const CountryDetails = ({counntryyy,handleVisitedCountries,handleVisitedFlags}) => {
const CountryDetails = (propsss) => {
        const {counntryyy,handleVisitedCountries,handleVisitedFlags} = propsss
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
                counntryyy = {counntryyy}
                handleVisitedCountries = {handleVisitedCountries}
                handleVisitedFlags = {handleVisitedFlags}
            ></CountryData> */}
            <CountryData {...propsss}></CountryData>
            
        </div>
    );
};

export default CountryDetails;