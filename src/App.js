import './App.css';

import { range } from 'd3-array';
import { scaleThreshold } from 'd3-scale';
import { geoCentroid } from 'd3-geo';

import WorldMap from './Components/WorldMap.js';
import worlddata from './Components/Worlddata.js';

const appdata = worlddata.features
  .filter(d => geoCentroid(d)[0] < -20)

appdata
  .forEach((d,i) => {
    const offset = Math.random()
    d.launchday = i
    d.data = range(30).map((p,q) => q < i ? 0 : Math.random() * 2 + offset)
  })

const dim = { screenWidth: 1000, screenHeight: 500, hover: "none", brushExtent: [0,40] };

function App() {

  const filteredAppdata = appdata
      .filter((d,i) => d.launchday >= dim.brushExtent[0] && d.launchday <= dim.brushExtent[1])

  return (
    <div className="App">
      <header className="App-header">
        <h2>One quiet night</h2>
      </header>
      <div className="map">
        <WorldMap  data={filteredAppdata} size={[dim.screenWidth / 2, dim.screenHeight / 2]} />
      </div>

    </div>
  );
}

export default App;
