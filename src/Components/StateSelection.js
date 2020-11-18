import React, { useState, useEffect }  from "react";
import Select from 'react-select';

import { csv } from 'd3-fetch';
import csvLocation from '../Data/locations_information.csv';

const customStyles = {
    control: base => ({
        ...base,
        fontSize: '12px',
    }),
    container: provided => ({
        ...provided,
        width: 150,
        fontSize: '12px'
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        position: 'static',
        color: '#1a1a1a'
      }),

};
  
const StateSelection = (props) => {

    const { onStateId, setOnStateId } = props;

    const [stateLocation, setStateLocation] = useState([]);
    useEffect(() => {
        csv(csvLocation).then(state => {
            let tempLoc = state.filter(d => d.type === "state").map(d =>  {
                     return { value: d.fips, label: d.name };
                });
            setStateLocation(tempLoc);
        })
    }, []);

    return (
        <div style={{ margin: "20px auto", maxWidth: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <p className="option-button" style={{ cursor: "default"}}>Choose your state: </p>
            <Select 
                defaultValue={{ value: 53, label: "Washington" }}
                name="states"
                options={stateLocation}
                styles={customStyles}
                onChange={value => {
                    setOnStateId(value.value);
                }}
                />
        </div>
    )

}

export default StateSelection;