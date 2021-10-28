import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((datPoint) => (
        <ChartBar
          key={datPoint.label}
          value={datPoint.value}
          maxValue={totalMaximum}
          label={datPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
