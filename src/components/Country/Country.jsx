import './Country.css'

const Country = ({ countryData }) => {
    console.log(countryData)

    const { name, flags, population, area, capital, cca3 } = countryData;

    return (
        <div className="Country">

            <h2>  {name?.common} </h2>
            <img style={{ borderRadius: '7px', boxShadow: '10px 15px 30px' }} src={flags.png} alt="" />


            <h4>Capital: {capital} </h4>
            <h5>Population: {population} </h5>
            <p>Area: {area} </p>
            <p><small>Code: {cca3}</small></p>
            <button>Visited</button>

        </div>
    );
};

export default Country;