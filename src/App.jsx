import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";

const App = () => {
  const [city, setCity] = useState("");
  const [results, setResult] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });

  const getWeather = (e) => {
    e.preventDefault();
    fetch("https://api.weatherapi.com/v1/current.json?key=4eead6ff008a492b8d4130745252206&q=London&aqi=no")
      .then((res) => res.json())
      .then((data) =>
        setResult({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        })
      );
  };

  return (
    <div>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results={results} />
    </div>
  );
};

export default App;
