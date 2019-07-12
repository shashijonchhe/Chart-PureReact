import React from "react";
import "./accordionComponent.css";
import Highchart from "../highChart/highChart";
import ProgressBar from "../progressBar/progressBar";

const AccordionComponent = ({ option, onClick, index }) => {
  return (
    <div className="accordian">
      <div
        className="accordionHeader"
        onClick={() => {
          onClick(index);
        }}
      >
        <span className="achieved-time">{option.monthAndYear}</span>
        <div className="achieved-text">
          <span className="select-box" />
          <span>Goal achieved:{option.goalsAchieved} days</span>
        </div>
        <div className="notachieved-text">
          <span className="select-box" />
          <span>Goal not achieved:{option.goalsNotAchieved} days</span>
        </div>
        <span className="arrowIcons">
          {option.isOpen && <span className="arrowUp" />}
          {!option.isOpen && <span className="arrowDown" />}
        </span>
      </div>
      {option.isOpen && (
        <div className="accordianPanel">
          <div class="accordionInfo">
            <div>
              <Highchart
                days={option.days}
                chartOptions={option.chartOptions}
              />
            </div>
            <div>
              <ProgressBar
                goalsAchievedElements={option.goalsAchievedElements}
                goalsNotAchievedElements={option.goalsNotAchievedElements}
                monthAndYear={option.monthAndYear}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AccordionComponent;
