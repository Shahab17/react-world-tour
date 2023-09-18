import { useState } from 'react';
import './Country.css'

const Country = ({ countryData, handleVisitedCountries, handleVisitedFlags }) => {
    // console.log(countryData)

    const { name, flags, population, area, capital, cca3 } = countryData;

    const [visited, setVisited]=useState(false)

    const handleVisited = ()=>{
        setVisited(!visited)
    }
   
    // const passWithParams = ()=> handleVisitedCountries(countryData);

    return (
        <div className={`Country  ${visited ? 'visited' : 'non-visited'} `}>

            <h2 style={{color: visited? 'red' : 'black' }} >  {name?.common} </h2>
            <img style={{ borderRadius: '7px', boxShadow: '10px 15px 30px' }} src={flags.png} alt="" />


            <h4>Capital: {capital} </h4>
            <h5>Population: {population} </h5>
            <p>Area: {area} </p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=> handleVisitedCountries(countryData)} >Mark Visited</button> <br />
            <button onClick={()=>handleVisitedFlags(countryData.flags.png)} >Add Flag</button> <br />
            <button onClick={handleVisited} >{visited ? 'Visited' : 'Going' }</button>
            {
                visited ? ' I have visited this country.' : ' I want to visit.  '
            }

        </div>
    );
};

export default Country;