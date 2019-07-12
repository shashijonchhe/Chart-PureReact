import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Highchart = ({ days, chartOptions }) => {
  const options = {
    chart: {
      type: "spline"
    },

    xAxis: {
      // categories: goalsAchievedElements
      categories: days
    },
    series: [
      {
        // data: goalsNotAchievedElements
        data: chartOptions
      }
    ]
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default Highchart;
