import React, { useState } from "react";
import National from "../Components/National";
import States from "./States";
import Counties from "./Counties";

import ReactGA from 'react-ga';

const Forecast = () => {

    const [isNational, setIsNationl] = useState(true);
    const [isState, setIsState] = useState(false);
    const [isCounty, setIsCounty] = useState(false);

    const clickHandler = (name) => {
        ReactGA.event({
            category: name,
            action: 'Switch forecast page view'
        });
    };

    return (
        <div className="container">
            <p className="text-height" style={{maxWidth: "900px", margin: "0 auto 30px auto", textAlign: "left"}}><code>One Quiet Night</code> develops scientifically-driven machine learning models to accurately predict the spread of COVID-19 infections. This generates accurate forecasts that are competitive with and different from the current set of models in the <a href="https://c3.ai/customers/covid-19-data-lake/" className="c3-ai-link">CDC COVID-19 ensemble</a>. 
            We operationalize the forecast to retrain the model and make predictions on new data.</p>
            <p className="text-height" style={{maxWidth: "900px", margin: "0 auto 30px auto", textAlign: "left"}}>Our historical forecasts can be found on <a className="c3-ai-link" href="https://viz.covid19forecasthub.org/">COVID-19 Forecast Hub</a>.</p>
            <div className="options">
                <p className="option-button" style={{cursor: "default"}}>Choose your view:</p>
                <p className={isNational ? "selected" : "option-button"}
                    onClick={()=>{
                    setIsNationl(true)
                    setIsState(false)
                    setIsCounty(false)
                    clickHandler('National')}}>National</p>
                <p className={isState ? "selected" : "option-button"}
                    onClick={()=> {
                    setIsNationl(false);
                    setIsState(true)
                    setIsCounty(false)
                    clickHandler('State')}} >States</p>
                <p className={isCounty ? "selected" : "option-button"}
                    onClick={()=> {
                    setIsNationl(false);
                    setIsState(false)
                    setIsCounty(true)
                    clickHandler('County')}} >Counties</p>
            </div>
            <div style={{boxShadow: "0 0 6px rgba(0,0,0,.25)",   borderRadius: "4px", padding: "1rem .55rem"}}>
                <h3 style={{ fontSize: "25px", fontWeight: "300"}}>Weekly reported COVID-19 new cases per 100,000 people</h3>
                {
                    isNational ? <National /> : isState ? <States /> : <Counties />
                }
            </div>
            <p className="text-height" style={{maxWidth: "500px", fontSize: "12px", margin: "30px auto 0 auto"}}>Weekly data last updated: 2020-11-29</p>
            <p className="text-height" style={{maxWidth: "500px", fontSize: "12px", margin: "15px auto 0 auto"}}><code>One Quiet Night</code> uses data from <a href="https://c3.ai/customers/covid-19-data-lake/" className="c3-ai-link">C3 AI COVID-19 Data Lake</a> and visualizes weekly COVID-19 cases and 4 weeks forecast from our forecasting model.</p>
        </div>
    )
}

export default Forecast;