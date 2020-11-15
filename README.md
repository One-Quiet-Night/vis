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

# ReChart
## LineChart
- Data format for `LineChart` component from ReChart
```js
const data = [{name: 'a', value: 12}]
const otherData = [{ "name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400}, { "name": "Page B", "uv": 3000, "pv": 1398, "amt": 2210 }]
```

- Axis interval for line chart : useful for our x-axis (date) - [reference](https://recharts.org/en-US/examples/LineChartAxisInterval)
    - interval : `preserverEnd` || `preserverStart` || `preserveStartEnd` || {`int`} - skip the `int`
    - angle
    - dx
    - or customize the axis tick
    ```js
    class CustomizedAxisTick extends PureComponent {
        render() {
            const {
            x, y, stroke, payload,
            } = this.props;

            return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
            </g>
            );
        }
    }
    ```

- edit color scheme, remove axis line/tick, distribute horizontal line (CartesianGrid) evenly, change x axis to 2 months (Jan1 > Apr1 > Jun 1 >>> ) / add axis name (Title)
- National date marks : for referenceline
    - Jan 20: First US COVID-19 case
    - Mar 13 : National emergency declared
    - Mar 27 : CARES act enacted
    - Apr 15 : Stimulus payments starts
    - Nov 3 : Election day