# React-Simple-Maps

## Install
```
npm install --save react-simple-maps
yarn add -save react-simple-maps
```

## 3 components for basic SVG map chart
- ComposableMap
- Geographies
- Geography
- And a valid topojson/geojson file

## More tools
- `ZoomableGroup`
- Tool tip : istall `react-tooltip` to enable a tooltip

## Data from csv 
- Format_1
    - historical data of the infected case by county (id)
    ```
    dates,00001,00002,00004,00005,00006, ...
    2020-01-23,0,0,0,0,0,0,0,0,0,0,0,0, ...
    2020-01-24,0,0,0,0,0,0,0,0,0,0,0,0, ...
    2020-01-25,0,0,0,0,0,0,0,0,0,0,0,0, ...
    ...
    ```

- Format_2
    - will use the latest date data for choropleth mapping
    ```
    , dates, id, value, fips.id
    0,2020-01-23,Abbeville_SouthCarolina_UnitedStates,0,45001
    1,2020-01-23,Acadia_Louisiana_UnitedStates,0,22001
    2,2020-01-23,Accomack_Virginia_UnitedStates,0,51001
    3,2020-01-23,Ada_Idaho_UnitedStates,0,16001
    4,2020-01-23,Adair_Iowa_UnitedStates,0,19001
    5,2020-01-23,Adair_Kentucky_UnitedStates,0,21001
    6,2020-01-23,Adair_Missouri_UnitedStates,0,29001
    ...
    ```