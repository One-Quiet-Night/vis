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

const CountySelection = (props) => {

    const { onCountyId, setOnCountyId } = props;

    const [stateLocation, setStateLocation] = useState([]);
    const [countyLocation, setCountyLocation] = useState([]);
    const [countyList, setCountyList] = useState([]);
    const [displayCounty, setDisplayCounty] = useState({});

    useEffect(() => {
      csv(csvLocation).then(state => {
        let tempState = state.filter(d => d.type === "state").map(d =>  {
            return { value: d.fips, label: d.name };
          });
        setStateLocation(tempState);
        let tempCounty = state.filter(d => d.type === "county").map(d =>  {
          return { value: d.fips, label: d.name, state: d.state };
        });
        setCountyLocation(tempCounty); // {value: "45001", label: "Abbeville County", state: "SouthCarolina"}
        let firstCounty = tempCounty.filter(d => d.state === "Washington");
        setCountyList(firstCounty);
        // console.log('countylist', countyList)
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
          onChange={ e => {
              let newCountyList = [...countyLocation].filter(d => d.state === e.label);
              // console.log(e.label); // "Hawaii"
              // console.log(newCountyList);
              setCountyList(newCountyList);
              setDisplayCounty(newCountyList[0]);
          }}
          />
        <p className="option-button" style={{ cursor: "default"}}>county: </p>
        <Select 
          name="county"
          options={countyList}
          styles={customStyles}
          // defaultValue={displayCounty}
          onChange={value => {
            setOnCountyId(value.value);
          }}
          />
      </div>
    )

}

export default CountySelection;