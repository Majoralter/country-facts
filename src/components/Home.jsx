import { useEffect } from "react";
import { useState } from "react";
import { useOutletContext, Link, useNavigate } from "react-router-dom";
import Loader from "../Loader";
const Home = () => {
  const [theme] = useOutletContext();

  const [countryName, setCountryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  const navigate = useNavigate();

  const fetchCountries = async () => {
    setIsLoading(true);
    const response = await fetch("https://restcountries.com/v3.1/all"),
      data = await response.json();

    data.length = 100;

    setIsLoading(false);
    setCountries([...data]);
  };

  const fetchRegion = async (e) => {
    let region = e.target.value

    if(region === "") return

    if (region === "All") {
      fetchCountries();
      return;
    } else {
      setIsLoading(true);

      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );

      const data = await response.json();

      setCountries([...data]);

      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/countries/${countryName}`);
  };

  useEffect(() => {
    try {
      fetchCountries();
    } catch (err) {
      console.log(err.message);
    }

    return () => {};
  }, []);

  const country = countries.map((item, index) => {
    return (
      <Link
        to={`/countries/${item.name.common}`}
        key={index}
        className="country"
        id={theme}
      >
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
      </Link>
    );
  });

  return (
    <main style={{ backgroundColor: theme === "dark" && "hsl(207, 26%, 17%)" }}>
      <form className="main__form" onSubmit={handleSearch}>
        <input
          id={theme}
          placeholder="Search for a country..."
          type="text"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />

        <select
          id={theme}
          name="region"
          onChange={fetchRegion}
        >
          <option value="">Filter by Region</option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>

      {isLoading ? <Loader /> : <div className="countries">{country}</div>}
    </main>
  );
};

export default Home;
