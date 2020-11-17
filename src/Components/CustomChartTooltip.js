import React from "react";

const CustomChartTooltip = ({ active, payload }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="tooltip-label" style={{fontSize: "18px"}}>{`${Math.floor(payload[0].value)}`}</p>
                <p className="tooltip-label">{`new cases per 100K`}</p>
            </div>
        )
    }
    return null;
}

export default CustomChartTooltip;