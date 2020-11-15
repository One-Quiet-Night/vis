import React, { useState, useEffect } from "react";
import National from "../Components/National";

const latestDate = "2020-11-11";

const Forecast = () => {

    return (
        <div className="container">
            <div className="options">
                <p>Choose the option: </p>
                <p>National</p>
                <p>States</p>
                <p>Counties</p>
            </div>
            <div>
                <h3>Daily reported COVID-19 new cases per 100,000 people in US</h3>
                <National />
            </div>

        </div>
    )
}

export default Forecast;