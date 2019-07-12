import React from "react";
import { Progress } from "reactstrap";
import "./progressBar.css";

const ProgressBar = ({
  goalsAchievedElements,
  goalsNotAchievedElements,
  monthAndYear
}) => {
  let month = monthAndYear.split(" ")[0];
  return (
    <div className="progress-container">
      {goalsAchievedElements.map((ele, ind) => {
        return (
          <div key={ind} className="progress-values">
            <span>{month}:</span>
            <Progress value={ele * (100 / 24)} color="success" />
            <span>{ele}</span>
            <br />
          </div>
        );
      })}
      {goalsNotAchievedElements.map(ele => {
        return (
          <div className="progress-values">
            <span>{month}:</span>
            <Progress value={ele * (100 / 24)} color="warning" />
            <span>{ele}</span>
            <br />
          </div>
        );
      })}
    </div>
  );
};
export default ProgressBar;
