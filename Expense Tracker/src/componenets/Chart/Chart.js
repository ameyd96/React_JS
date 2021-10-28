import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((datPoint) => (
        <ChartBar
        key={datPoint.label}
          value={datPoint.value}
          maxValue={null}
          label={datPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
