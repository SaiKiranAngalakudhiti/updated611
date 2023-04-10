import CaptionCarousel from './CaptionCarousel';
import './LandingPage.css';
import Search from './Search';
import Info1 from './Info1';
import TimeContainer from './TimeContainer';
import ImageFooter from './ImageFooter';
import { useState, useEffect } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import axios from "axios";
import mydata from './data';

function LandingPage() {
  const [day, setDay] = useState("Today");
  const [pref, set_pref] = useState("Casual");
  const [style, setStyle] = useState("");
  const [weather_data, set_weather_data] = useState(null);
  const [clothes_data, set_clothes_data] = useState(null);
  const [act_data, set_act_data] = useState(mydata);
  const [send_search, set_send_search] = useState(act_data[0]);
  const [searchip, setSearchip] = useState(0);
  const today = new Date();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let curr_day_idx = today.getDay();
  const day_list = []
  day_list.push(weekday[curr_day_idx])
  let temp1 = (curr_day_idx + 1) % 7;

  while (temp1 !== curr_day_idx) {
    day_list.push(weekday[temp1]);
    temp1 = (temp1 + 1) % 7;
  }

  localStorage.setItem("searchip", 0);

  useEffect(() => {
    window.addEventListener('storage', () => {
      setDay(localStorage.getItem("day"));
      setStyle(localStorage.getItem("style"));
      setSearchip(localStorage.getItem("searchip"));
      set_pref(localStorage.getItem("pref"))
    })
  }, [searchip]);


  useEffect(() => {
    get_data_for_info1();
  }, [searchip]);

  useEffect(() => {
    send_info_search();
  }, [day]);

  async function get_data_for_info1(event) {
    try {
      let res = await axios.get("http://localhost:4000/weatherAPI/getWeatherData/" + searchip);
      set_weather_data(res.data);
      res.data.sort(function (a, b) {
        return day_list.indexOf(a.day) - day_list.indexOf(b.day);
      });
      set_act_data(res.data);
      if (res.data.length === 0) {
        set_act_data(mydata)
      }
    } catch (err) {
      console.log(err)
    }
  };
  window.addEventListener('storage', get_data_for_info1);
  const curr_hour = today.getHours();
  const time_list = [];
  const curr_str = curr_hour.toString();
  if (curr_str.length === 1) {
    time_list.push('0' + curr_str)
  }
  else
    time_list.push(curr_str);
  let temp = (curr_hour + 1) % 24;
  while (temp !== curr_hour) {
    var tempstr = temp.toString();
    if (tempstr.length === 1) {
      tempstr = '0' + tempstr
    }
    time_list.push(tempstr);
    temp = (temp + 1) % 24;
  }

  //sending data to search.js
  //day
  function send_info_search() {
    if (localStorage.getItem("day") === "Today") {
      set_send_search(act_data[0])
    }
    for (let i = 0; i < 7; i++) {
      let temp = localStorage.getItem("day");
      if (temp === act_data[i].day) {
        set_send_search(act_data[i]);
      }
    }
  }

  //for clothes
  useEffect(() => {
    get_clothes_data();
  }, [day, searchip, pref]);

  async function get_clothes_data() {
    let tempday = day;
    if (day === "Today") {
      tempday = weekday[curr_day_idx];
    }
    try {
      let res = await axios.get("http://localhost:4000/clothAPI/getClothing/" + searchip + "/" + pref + "/" + tempday);
      set_clothes_data(res.data);

      if (res.data === "EMPTY") {
        set_clothes_data(null)
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <ChakraProvider>
      <div className='Landing'>
        <Search day={day} setStyle={setStyle} setSearchip1={setSearchip} set_pref={set_pref} send_search={send_search} act_data={act_data} />
        <CaptionCarousel day={day} style={style} setDay={setDay} pref={pref} clothes_data={clothes_data} />
        <TimeContainer time_list={time_list} />
        <Info1 setDay={setDay} day_list={day_list} act_data={act_data} />
        <ImageFooter />
      </div>
    </ChakraProvider>
  );
}

export default LandingPage;
