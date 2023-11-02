import { useEffect } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
const Home = () => {
  const [theme] = useOutletContext();

  const [countryName, setCountryName] = useState("");
  const [region, setRegion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    setIsLoading(true);
    const response = await fetch("https://restcountries.com/v3.1/all"),
      data = await response.json();

    data.length = 48;

    setIsLoading(false);
    setCountries([...data]);
    // console.log(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const country = countries.map((item, index) => {
    return (
      <div key={index} className="country" id={theme}>
        <img src={item.flags.svg} alt={`The flag of ${item.name.official}`} />

        <div className="country__details">
          <h1>{item.name.official}</h1>
          <p>
            Population: <span>{item.population}</span>
          </p>
          <p>
            Region: <span>{item.region}</span>
          </p>
          <p>
            Capital: <span>{item.capital}</span>
          </p>
        </div>
      </div>
    );
  });

  return (
    <main style={{ backgroundColor: theme === "dark" && "hsl(207, 26%, 17%)" }}>
      <form className="main__form">
        <input
          id={theme}
          placeholder="Search for a country..."
          type="text"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />

        <select
          id={theme}
          name="region-filter"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>

      {isLoading ? <p>Loading</p> : <div className="countries">{country}</div>}
    </main>
  );
};

export default Home;
