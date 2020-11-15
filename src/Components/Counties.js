{/* <ComposableMap projection="geoAlbersUsa" style={{ maxHeight: "600"}} >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const cur = region.find(s => s.fips === geo.id);
                            return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={cur ? colorScale(cur.value) : "#EEE"}
                                        onClick={() => {
                                            console.log(`${geo.properties.name} county ${cur.id}: ${cur.value}`);
                                            setCounty(cur.fips);
                                        }}
                                        // onMouseEnter={() => {
                                        //     // console.log(cur.name)
                                        //     setTooltipContent(`${cur.name} : ${cur.value}`);
                                        // }}
                                        // onMouseLeave={() => {
                                        //     setTooltipContent("");
                                        // }}
                                    />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap> */}