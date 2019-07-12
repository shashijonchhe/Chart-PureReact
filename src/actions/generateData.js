const generateData = () => {
  let data = {};

  let m = new Date(2018, 5);

  while (m < Date.now()) {
    data[m] = [];
    let n = new Date(m);
    while (n.getMonth() === m.getMonth()) {
      data[m].push(Math.floor(Math.random() * (24 - 8)) + 8);
      n.setDate(n.getDate() + 1);
    }

    m.setMonth(m.getMonth() + 1);
  }
  return data;
};
const goalsAchieved = (data, str) => {
  let count = 0;
  let daysArr = [];
  let isAchieveArr = [];
  data.forEach((days, key) => {
    daysArr.push(key + 1);
    if (days >= 22) {
      count++;
      isAchieveArr.push(days);
    }
  });
  if (str === "isAchieve") {
    return count;
  } else if (str === "days") {
    return daysArr;
  } else {
    return isAchieveArr;
  }
};
const goalsNotAchieved = (data, str) => {
  let count = 0;
  let isNotAchieveArr = [];
  data.forEach(days => {
    if (days < 22) {
      count++;
      isNotAchieveArr.push(days);
    }
  });
  if (str === "isNotAchieve") {
    return count;
  }
  return isNotAchieveArr;
};

export const chartData = () => {
  let data = generateData();
  return Object.keys(data).map(val => {
    let my = val.split(" ")[1] + " " + val.split(" ")[3];
    let mapObj = {};
    mapObj.isOpen = false;
    mapObj.monthAndYear = my;
    mapObj.chartOptions = data[val];
    mapObj.goalsAchieved = goalsAchieved(data[val], "isAchieve");
    mapObj.days = goalsAchieved(data[val], "days");
    mapObj.goalsNotAchieved = goalsNotAchieved(data[val], "isNotAchieve");
    mapObj.goalsAchievedElements = goalsAchieved(data[val], "isAchieveEle");
    mapObj.goalsNotAchievedElements = goalsNotAchieved(
      data[val],
      "isNotAchieveEle"
    );
    return mapObj;
  });
};
