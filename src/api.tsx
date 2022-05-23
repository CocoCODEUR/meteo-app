import React, { useEffect, useState } from "react";

import "./api.css";

type Daily = {
  sunset: [number];
  winddirection_10m_dominant: [number];
  shortwave_radiation_sum: [number];
  precipitation_hours: [string];
  sunrise: [string];
  precipitation_sum: [number];
  temperature_2m_max: [number];
  temperature_2m_min: [number];
  time: [string];
};
type Props = {
  city: string;
};

export default function Data(props: Props) {
  const [daily, setDaily] = useState<Daily>();

  useEffect(() => {
    const fetchData = async function () {
      const url =
        "https://api.open-meteo.com/v1/forecast?latitude=48.8567&longitude=2.3510&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_hours,winddirection_10m_dominant,shortwave_radiation_sum&timezone=Europe%2F" +
        props.city;

      const res = await fetch(url);
      const AllData: any = await res.json();

      setDaily(AllData.daily);
    };
    fetchData();
  }, []);

  if (!daily) {
    return <div>LOADING.... </div>;
  } else {
    return <div>{daily.temperature_2m_max[0]}</div>;
  }
}
