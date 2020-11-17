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
            <div>
                <h3 style={{ fontSize: "25px", fontWeight: "300"}}>Daily reported COVID-19 new cases per 100,000 people in US</h3>
                {
                    isNational ? <National /> : isState ? <States /> : <Counties />
                }

            </div>

        </div>
    )
}

export default Forecast;