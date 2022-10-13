import "./App.css";
import {useState, useEffect} from "react";
import SearchBox from "./components/SearchBox";
import ConfirmedCard from "./components/ConfirmedCard";
import DeathCard from "./components/DeathCard";
import RecoveredCard from "./components/RecoveredCard";
import Chart from "./components/Chart";

import {fetchData} from "./api/index.jsx";
function App() {
  const [data, setData] = useState([]);
  const fetchCases = async (country) => {
    if (country === "Global") {
      setData(await fetchData());
    } else {
      setData(await fetchData(country));
    }
  };
  const isGlobal = data.hasOwnProperty("Global");
  let TotalConfirmed, TotalDeaths, TotalRecovered;
  if (isGlobal) {
    TotalConfirmed = data.Global.TotalConfirmed;
    TotalDeaths = data.Global.TotalDeaths;
    TotalRecovered = data.Global.TotalRecovered;
  } else {
    TotalConfirmed = Math.max(0, ...data?.map((day) => day.Confirmed));
    TotalDeaths = Math.max(0, ...data?.map((day) => day.Deaths));
    TotalRecovered = Math.max(0, ...data?.map((day) => day.Recovered));
  }
  useEffect(() => {
    fetchCases("Global");
  }, []);
  return (
    <div className="flex max-w-screen justify-start items-center flex-col bg-slate min-h-screen">
      <div className="flex w-full items-center justify-center md:px-4 px-5 py-5 mx-5">
        <div className="w-1/2 flex items-center justify-center my-5">
          <img src="/covid-logo.png" alt="logo" width="100px" height="100"></img>
          <p className="ml-4 font-bold md:text-5xl text-4xl text-red text-center">COVID TRACKER</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center p-4">
        <ConfirmedCard TotalConfirmed={TotalConfirmed} />
        <DeathCard TotalDeaths={TotalDeaths} />
        <RecoveredCard TotalRecovereds={TotalRecovered} />
      </div>
      <SearchBox fetchCases={fetchCases} />
      <Chart data={data} isGlobal={isGlobal} />
      <div className="text-center w-full my-4 font-bold">Made by Nguyen Dang To ❤️</div>
    </div>
  );
}

export default App;
