import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';


const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags]=useState([])


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));

    }, [])

    const handleVisitedCountries = country =>{
        // console.log('clicked visited countries button')
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag =>{
        // console.log('adding flags')
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }


    return (
        <div  >
            <h3>Countries: {countries.length} </h3>
            {/* visited countries */}
            <div>
                <h5>Visited Countries: {visitedCountries.length} </h5>
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca3} >{country.name.common}</li> )
                    }
                </ol>
            </div>

            <div className="flags-container">
                {
                    visitedFlags.map( (flags, idx) => <img key={idx} src={flags}></img> )
                }
            </div>
                    {/* display countries */}
            <div className="countries-container">
                {
                    countries.map(countryInfo => <Country key={countryInfo.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags = {handleVisitedFlags}
                         countryData={countryInfo} ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;