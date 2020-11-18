import React, { useState } from "react";
import National from "../Components/National";
import States from "./States";
import Counties from "./Counties";

const Forecast = () => {

    const [isNational, setIsNationl] = useState(true);
    const [isState, setIsState] = useState(false);
    const [isCounty, setIsCounty] = useState(false);

    return (
        <div className="container">
            <p className="text-height" style={{maxWidth: "900px", margin: "0 auto 30px auto"}}><code>One Quiet Night</code> develops a methodology that augments scientific models with machine-learnable structures. Our models use temporal and spatial features of the daily case reports and movement trends data to accurately predict future Covid-19 cases. Our forecast based on these models achieves state-of-the-art accuracies.</p>
            <div className="options">
                <p className="option-button" style={{cursor: "default"}}>Choose your view:</p>
                <p className={isNational ? "selected" : "option-button"}
                    onClick={()=>{
                    setIsNationl(true)
                    setIsState(false)
                    setIsCounty(false)} }>National</p>
                <p className={isState ? "selected" : "option-button"}
                    onClick={()=> {
                    setIsNationl(false);
                    setIsState(true)
                    setIsCounty(false)}} >States</p>
                <p className={isCounty ? "selected" : "option-button"}
                    onClick={()=> {
                    setIsNationl(false);
                    setIsState(false)
                    setIsCounty(true)}} >Counties</p>
            </div>
            <div style={{boxShadow: "0 0 6px rgba(0,0,0,.25)",   borderRadius: "4px", padding: "1rem .55rem"}}>
                <h3 style={{ fontSize: "25px", fontWeight: "300"}}>Daily reported COVID-19 new cases per 100,000 people in US</h3>
                {
                    isNational ? <National /> : isState ? <States /> : <Counties />
                }

            </div>
            <p className="text-height" style={{maxWidth: "500px", fontSize: "12px", margin: "30px auto 0 auto"}}><code>One Quiet Night</code> uses data from <a href="https://c3.ai/customers/covid-19-data-lake/" className="c3-ai-link">C3 AI COVID-19 Data Lake</a> and visualizes newly reported COVID-19 cases and forecast from our forecasting model with <a href="https://d3js.org/" className="c3-ai-link">D3.js.</a></p>
        </div>
    )
}

export default Forecast;