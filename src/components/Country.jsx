import { useEffect, useState } from "react";
import { useParams, Link, useOutletContext } from "react-router-dom";
import Loader from "../Loader";

const Country = () => {
  const { id } = useParams();
  const [theme] = useOutletContext();
  const [countryData, setCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCountry = async () => {
    setIsLoading(true);
    const response = await fetch(`https://restcountries.com/v3.1/name/${id}`),
      data = await response.json();

    setIsLoading(false);
    setCountryData([...data]);

    console.log(data);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  const country = countryData.map((item, index) => {
    return (
      <div
        className="info"
        key={index}
        style={{ color: theme === "dark" && "#fff" }}
      >
        <img src={item.flags.svg} alt="" />

        <div className="info__data">
          <h1>{item.name.official}</h1>

          <div className="data">
            <p>Common name: {item.name.common}</p>
            <p>Population: {item.population}</p>
            <p>Region: {item.region}</p>
            <p>Sub region: {item.subregion}</p>
            <p>Capital: {item.capital}</p>
            <p>Top level domain: {item.tld[0]}</p>
            <p>
              Currency: {Object.entries(item.currencies)[0][1].name}{" "}
              <small>
                Symbol: {Object.entries(item.currencies)[0][1].symbol}
              </small>
            </p>
            <p>Languages: {Object.entries(item.languages)[0][1]}</p>
          </div>

          <div className="tabs"></div>
        </div>
      </div>
    );
  });

  return (
    <div
      className="country__info"
      style={{ backgroundColor: theme === "dark" && "hsl(207, 26%, 17%)" }}
    >
      <Link to="/" className="link" id={theme}>
        <span class="material-symbols-outlined">keyboard_backspace</span>
        Back
      </Link>

      {isLoading ? <Loader /> : <>{country}</>}
    </div>
  );
};

export default Country;
