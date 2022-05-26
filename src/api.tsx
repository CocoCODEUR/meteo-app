import React, { useEffect, useState } from "react";

import "./api.css";
// @ts-ignore
import soleil from "./img/iconesMeteo/soleil.png";
// @ts-ignore
import grossePluie from "./img/iconesMeteo/grossePluie.png";

type Hourly = {
  weathercode: [number];
  temperature_2m: [number];
  time: [string];
  windspeed_10m: [number];
};

type Props = {
  latitude: string;
  longitude: string;
  city: string;
};
type currentWeather = {
  time: string;
  temperature: number;
  weathercode: number;
  windspeed: number;
  winddirection: number;
};

export default function Data(props: Props) {
  const [hourly, setHourly] = useState<Hourly>();
  const [currentWeather, setCurrentWeather] = useState<currentWeather>();

  useEffect(() => {
    const fetchData = async function () {
      const url =
        "https://api.open-meteo.com/v1/forecast?latitude=" +
        props.latitude +
        "&longitude=" +
        props.longitude +
        "&hourly=temperature_2m,weathercode,windspeed_10m&current_weather=true&timezone=Europe%2FBerlin";

      const res = await fetch(url);
      const AllData: any = await res.json();
      console.log(AllData);
      setHourly(AllData.hourly);
      setCurrentWeather(AllData.current_weather);
      console.log(currentWeather);
    };
    fetchData();
  }, []);

  if (!hourly || !currentWeather) {
    return <div>LOADING...</div>;
  } else {
    // grand soleil
    if (currentWeather.weathercode === 0) {
      return (
        <div className="container-info-card">
          <div className="city-text">{props.city}</div>
          <img className="Icones-Meteo" src={soleil} alt="icones-meteo" />
          <div className="data-meteo-text">{hourly.temperature_2m[0]}°C</div>
          <div>{currentWeather.weathercode}</div>
        </div>
      );

      //soleil + nuage partiel
    } else if (currentWeather.weathercode === 1 || 2 || 3) {
      return (
        <div className="container-info-card">
          <div className="city-text">{props.city}</div>
          <img className="Icones-Meteo" src={grossePluie} alt="icones-meteo" />
          <div className="data-meteo-text">{hourly.temperature_2m[0]}°C</div>
          <div>{currentWeather.weathercode}</div>
        </div>
      );
    }
    //brouillard +verglas
    else if (currentWeather.weathercode === 45 || 48) {
      return (
        <div className="container-info-card">
          <div className="city-text">{props.city}</div>
          <img className="Icones-Meteo" src={grossePluie} alt="icones-meteo" />
          <div className="data-meteo-text">{hourly.temperature_2m[0]}°C</div>
          <div>{currentWeather.weathercode}</div>
        </div>
      );
    } //crachin
    else if (currentWeather.weathercode === 51 || 53 || 55 || 56 || 57)
      return (
        <div className="container-info-card">
          <div className="city-text">{props.city}</div>
          <img className="Icones-Meteo" src={grossePluie} alt="icones-meteo" />
          <div className="data-meteo-text">{hourly.temperature_2m[0]}°C</div>
          <div>{currentWeather.weathercode}</div>
        </div>
      );
    // pluie légère, modéré et forte
    else if (currentWeather.weathercode === 61 || 63 || 65 || 66 || 67)
      return (
        <div className="container-info-card">
          <div className="city-text">{props.city}</div>
          <img className="Icones-Meteo" src={grossePluie} alt="icones-meteo" />
          <div className="data-meteo-text">{hourly.temperature_2m[0]}°C</div>
          <div>{currentWeather.weathercode}</div>
        </div>
      );
    //CHUTE DE NEIGE
    else if (currentWeather.weathercode === 71 || 73 || 75)
      return (
        <div className="container-info-card">
          <div className="city-text">{props.city}</div>
          <img className="Icones-Meteo" src={grossePluie} alt="icones-meteo" />
          <div className="data-meteo-text">{hourly.temperature_2m[0]}°C</div>
          <div>{currentWeather.weathercode}</div>
        </div>
      );
    //CHUTE De grêle
    else if (currentWeather.weathercode === 77)
      return (
        <div className="container-info-card">
          <div className="city-text">{props.city}</div>
          <img className="Icones-Meteo" src={grossePluie} alt="icones-meteo" />
          <div className="data-meteo-text">{hourly.temperature_2m[0]}°C</div>
          <div>{currentWeather.weathercode}</div>
        </div>
      );
    // averse légère moderé et forte
    else if (currentWeather.weathercode === 80 || 81 || 82)
      return (
        <div className="container-info-card">
          <div className="city-text">{props.city}</div>
          <img className="Icones-Meteo" src={grossePluie} alt="icones-meteo" />
          <div className="data-meteo-text">{hourly.temperature_2m[0]}°C</div>
          <div>{currentWeather.weathercode}</div>
        </div>
      );
    // averse de neige légère moderé et forte
    else if (currentWeather.weathercode === 85 || 86)
      return (
        <div className="container-info-card">
          <div className="city-text">{props.city}</div>
          <img className="Icones-Meteo" src={grossePluie} alt="icones-meteo" />
          <div className="data-meteo-text">{hourly.temperature_2m[0]}°C</div>
          <div>{currentWeather.weathercode}</div>
        </div>
      );
    // orage légère modéré et forte
    else if (currentWeather.weathercode === 95 || 96 || 99)
      return (
        <div className="container-info-card">
          <div className="city-text">{props.city}</div>
          <img className="Icones-Meteo" src={grossePluie} alt="icones-meteo" />
          <div className="data-meteo-text">{hourly.temperature_2m[0]}°C</div>
          <div>{currentWeather.weathercode}</div>
        </div>
      );
    else {
      return <div> je sais pas quoi afficher </div>;
    }
  }
}
