import React, { useEffect, useState } from "react";
import "./css/style.css";
const Temp = () => {
  const [dates , setDates] = useState(time);
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Kanpur");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3d733b4bed9873cb92c6dc6d8f5bbeaa`;
      const response = await fetch(url);
      const resjson = await response.json();
      setCity(resjson.main);
    };
    fetchApi();
  }, [search]);
  var date = new Date().toDateString();
  var time = new Date().toLocaleTimeString();
  const update = () => {
time = new Date().toLocaleTimeString();
    setDates(time);
  };
  setInterval(update , 1000)



  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputfield"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="err">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="Location">
                <i className="fas fa-street-view"></i> {search}
              </h2>{date}
              <br/>{time}
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="min_max">Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
         )}
      </div>
    </>
  );
};
export default Temp;
